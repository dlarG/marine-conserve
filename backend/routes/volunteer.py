# volunteer_bp.py
from flask import Blueprint, request, jsonify
import os
import logging
from datetime import datetime
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.mime.application import MIMEApplication

logger = logging.getLogger(__name__)

volunteer_bp = Blueprint("volunteer", __name__)

ALLOWED_PDF_EXTS = {".pdf"}


def _ext(filename: str) -> str:
    if not filename or "." not in filename:
        return ""
    return "." + filename.rsplit(".", 1)[-1].lower()


def validate_volunteer_data(data):
    required = ["fullName", "email", "programTitle"]
    missing = [k for k in required if not (data.get(k) or "").strip()]
    if missing:
        return False, f"Missing required fields: {', '.join(missing)}"

    email = (data.get("email") or "").strip()
    if "@" not in email or "." not in email.split("@")[-1]:
        return False, "Invalid email format"

    if data.get("acknowledgedPersonalEmail") is not True:
        return False, "Please confirm the email acknowledgement"

    return True, None


def create_volunteer_application_template(payload):
    ts = datetime.now().strftime("%B %d, %Y at %I:%M %p")
    full_name = payload.get("fullName", "")
    email = payload.get("email", "")
    program_title = payload.get("programTitle", "")
    message = payload.get("message", "")

    html = f"""
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Volunteer Application</title>
      <style>
        body {{
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: #f4f7f6;
          margin: 0;
          padding: 0;
          color: #1e293b;
        }}
        .container {{
          max-width: 680px;
          margin: 20px auto;
          background: #ffffff;
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 6px 18px rgba(0,0,0,0.08);
        }}
        .header {{
          background: linear-gradient(135deg, #0d9488 0%, #059669 100%);
          padding: 24px;
          color: white;
        }}
        .header h1 {{
          margin: 0;
          font-size: 22px;
          font-weight: 700;
        }}
        .meta {{
          margin-top: 10px;
          font-size: 12px;
          opacity: 0.9;
        }}
        .content {{
          padding: 22px 24px;
          background: #f8fafc;
        }}
        .row {{
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-left: 4px solid #0d9488;
          border-radius: 10px;
          padding: 14px 14px;
          margin-bottom: 12px;
        }}
        .label {{
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: #0f766e;
          font-weight: 700;
          margin-bottom: 6px;
        }}
        .value {{
          font-size: 15px;
          color: #111827;
          word-break: break-word;
        }}
        .message {{
          white-space: pre-wrap;
          line-height: 1.55;
        }}
        .badge {{
          display: inline-block;
          background: #0d9488;
          color: white;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
        }}
        .footer {{
          padding: 16px 24px;
          text-align: center;
          font-size: 12px;
          color: #ffffff;
          background: #101727;
        }}
        a {{ color: #0d9488; text-decoration: none; }}
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Volunteer Application</h1>
          <div class="meta">Received: {ts}</div>
        </div>

        <div class="content">
          <div class="row">
            <div class="label">Program</div>
            <div class="value"><span class="badge">{program_title}</span></div>
          </div>

          <div class="row">
            <div class="label">Applicant</div>
            <div class="value">{full_name}</div>
          </div>

          <div class="row">
            <div class="label">Email</div>
            <div class="value"><a href="mailto:{email}">{email}</a></div>
          </div>

          <div class="row">
            <div class="label">Message</div>
            <div class="value message">{message or "(No message provided)"}</div>
          </div>

          <div class="row" style="border-left-color: #f59e0b;">
            <div class="label" style="color: #d97706;">Medical Certificate</div>
            <div class="value">{'Attached' if payload.get('hasMedicalCert') else 'Not provided'}</div>
          </div>
        </div>

        <div class="footer">
          <div>Sent from GREEN Inc. Volunteer Application Form</div>
        </div>
      </div>
    </body>
    </html>
    """
    return html


def send_email_via_gmail(to_email, subject, html_content, reply_to_email=None, attachments=None):
    gmail_user = os.getenv("SMTP_USERNAME")
    gmail_pass = os.getenv("SMTP_PASSWORD")
    if not gmail_user or not gmail_pass:
        return False, "Missing SMTP_USERNAME or SMTP_PASSWORD env vars"

    msg = MIMEMultipart()
    msg["From"] = gmail_user
    msg["To"] = to_email
    msg["Subject"] = subject
    if reply_to_email:
        msg["Reply-To"] = reply_to_email

    msg.attach(MIMEText(html_content, "html", "utf-8"))

    attachments = attachments or []
    for att in attachments:
        filename = att.get("filename")
        content_bytes = att.get("content_bytes")
        if not filename or not content_bytes:
            continue
        part = MIMEApplication(content_bytes, Name=filename)
        part["Content-Disposition"] = f'attachment; filename="{filename}"'
        msg.attach(part)

    try:
        with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
            server.login(gmail_user, gmail_pass)
            server.sendmail(gmail_user, to_email, msg.as_string())
        return True, "sent"
    except Exception as e:
        logger.error("Email send failed", exc_info=True)
        return False, str(e)


@volunteer_bp.route("/volunteer/apply", methods=["POST"])
def apply_volunteer():
    """
    Multipart form endpoint for volunteer program applications.
    Supports optional medical certificate PDF upload.
    """
    try:
        form = request.form or {}

        data = {
            "fullName": (form.get("fullName") or "").strip(),
            "email": (form.get("email") or "").strip(),
            "programTitle": (form.get("programTitle") or "").strip(),
            "message": (form.get("message") or "").strip(),
            "acknowledgedPersonalEmail": (form.get("acknowledgedPersonalEmail") or "").lower()
            in ("true", "1", "yes", "on"),
        }

        ok, err = validate_volunteer_data(data)
        if not ok:
            return jsonify({"status": "error", "message": err}), 400

        medical_pdf = request.files.get("medicalPdf")
        attachments = []

        if medical_pdf and medical_pdf.filename:
            ext = _ext(medical_pdf.filename)
            if ext not in ALLOWED_PDF_EXTS:
                return (
                    jsonify(
                        {
                            "status": "error",
                            "message": "Medical certificate must be a PDF.",
                        }
                    ),
                    400,
                )
            attachments.append(
                {
                    "filename": "medical-certificate.pdf",
                    "content_bytes": medical_pdf.read(),
                }
            )
            data["hasMedicalCert"] = True
        else:
            data["hasMedicalCert"] = False

        to_email = os.getenv("CONTACT_EMAIL")
        if not to_email:
            return (
                jsonify(
                    {"status": "error", "message": "CONTACT_EMAIL missing"}
                ),
                500,
            )

        subject = f"Volunteer Application: {data['programTitle']} ({data['fullName']})"
        html_content = create_volunteer_application_template(data)

        success, details = send_email_via_gmail(
            to_email=to_email,
            subject=subject,
            html_content=html_content,
            reply_to_email=data.get("email"),
            attachments=attachments,
        )

        if success:
            return (
                jsonify(
                    {
                        "status": "success",
                        "message": "Application sent! We'll contact you via email soon.",
                    }
                ),
                200,
            )

        return (
            jsonify(
                {
                    "status": "error",
                    "message": "Failed to send application email",
                    "details": details,
                }
            ),
            500,
        )

    except Exception as e:
        logger.error("Error in /volunteer/apply", exc_info=True)
        return jsonify({"status": "error", "message": "Internal server error"}), 500