from flask import Blueprint, request, jsonify
import os
import logging
from datetime import datetime
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.mime.application import MIMEApplication
from email.mime.image import MIMEImage

logger = logging.getLogger(__name__)

courses_bp = Blueprint("courses", __name__)

ALLOWED_IMAGE_EXTS = {".jpg", ".jpeg", ".png", ".webp"}
ALLOWED_PDF_EXTS = {".pdf"}

def _ext(filename: str) -> str:
    if not filename or "." not in filename:
        return ""
    return "." + filename.rsplit(".", 1)[-1].lower()

def validate_application_data(data):
    required = ["fullName", "email", "courseKey", "courseTitle", "selectedDateRange"]
    missing = [k for k in required if not (data.get(k) or "").strip()]
    if missing:
        return False, f"Missing required fields: {', '.join(missing)}"

    email = (data.get("email") or "").strip()
    if "@" not in email or "." not in email.split("@")[-1]:
        return False, "Invalid email format"

    if data.get("acknowledgedPersonalEmail") is not True:
        return False, "Please confirm the personal email acknowledgement"

    return True, None

def create_course_application_template(payload):
    ts = datetime.now().strftime("%B %d, %Y at %I:%M %p")
    full_name = payload.get("fullName", "")
    email = payload.get("email", "")
    course_title = payload.get("courseTitle", "")
    selected_range = payload.get("selectedDateRange", "")
    message = payload.get("message", "")

    html = f"""
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Course Application</title>
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
          <h1>New Course Application</h1>
          <div class="meta">Received: {ts}</div>
        </div>

        <div class="content">
          <div class="row">
            <div class="label">Applicant</div>
            <div class="value">{full_name}</div>
          </div>

          <div class="row">
            <div class="label">Email</div>
            <div class="value"><a href="mailto:{email}">{email}</a></div>
          </div>

          <div class="row">
            <div class="label">Course</div>
            <div class="value">{course_title}</div>
          </div>

          <div class="row">
            <div class="label">Preferred Date Range</div>
            <div class="value">{selected_range}</div>
          </div>

          <div class="row">
            <div class="label">Additional Message</div>
            <div class="value message">{message or "(none)"}</div>
          </div>
        </div>

        <div class="footer">
          <div>Sent from GREEN Inc. Courses Application Form</div>
        </div>
      </div>
    </body>
    </html>
    """
    return html

def send_email_via_gmail(to_email, subject, html_content, reply_to_email=None, attachments=None):
    """
    attachments: list of dicts {filename: str, content_bytes: bytes, mime_type?: str}
    """
    # Use the env vars that exist in backend/.env
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
        mime_type = (att.get("mime_type") or "").lower()
        if not filename or not content_bytes:
            continue

        # Prefer correct MIME for images; PDFs can stay as application/*
        if mime_type.startswith("image/"):
            part = MIMEImage(content_bytes, _subtype=mime_type.split("/", 1)[1], name=filename)
        else:
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

@courses_bp.route("/courses/apply", methods=["POST"])
def apply_course():
    """
    JSON-only application (Discover Scuba) - now DEPRECATED in favor of /courses/apply-multipart,
    but kept for compatibility.
    """
    try:
        data = request.get_json() or {}
        ok, err = validate_application_data(data)
        if not ok:
            return jsonify({"status": "error", "message": err}), 400

        to_email = os.getenv("CONTACT_EMAIL")
        if not to_email:
            return jsonify({"status": "error", "message": "CONTACT_EMAIL missing"}), 500

        course_title = data.get("courseTitle")
        applicant = data.get("fullName")
        subject = f"Course Application: {course_title} ({applicant})"
        html_content = create_course_application_template(data)

        success, details = send_email_via_gmail(
            to_email=to_email,
            subject=subject,
            html_content=html_content,
            reply_to_email=data.get("email"),
            attachments=[]
        )

        if success:
            return jsonify({"status": "success", "message": "Application sent! We'll contact you via email soon."}), 200

        return jsonify({"status": "error", "message": "Failed to send application email", "details": details}), 500
    except Exception as e:
        logger.error(f"Error in /courses/apply: {str(e)}", exc_info=True)
        return jsonify({"status": "error", "message": "Internal server error"}), 500

@courses_bp.route("/courses/apply-multipart", methods=["POST"])
def apply_course_multipart():
    """
    Multipart form endpoint to support attachments:
    - priorCertImage (required for courses that need it)
    - medicalPdf (optional for all)
    """
    try:
        form = request.form or {}

        data = {
            "fullName": (form.get("fullName") or "").strip(),
            "email": (form.get("email") or "").strip(),
            "courseKey": (form.get("courseKey") or "").strip(),
            "courseTitle": (form.get("courseTitle") or "").strip(),
            "selectedDateRange": (form.get("selectedDateRange") or "").strip(),
            "message": (form.get("message") or "").strip(),
            "acknowledgedPersonalEmail": (form.get("acknowledgedPersonalEmail") or "").lower() in ("true", "1", "yes", "on"),
            "requiresPriorCert": (form.get("requiresPriorCert") or "").lower() in ("true", "1", "yes", "on"),
        }

        ok, err = validate_application_data(data)
        if not ok:
            return jsonify({"status": "error", "message": err}), 400

        prior_cert = request.files.get("priorCertImage")
        medical_pdf = request.files.get("medicalPdf")

        attachments = []

        if data["requiresPriorCert"]:
            if not prior_cert or not prior_cert.filename:
                return jsonify({"status": "error", "message": "Prior certification image is required for this course."}), 400

            ext = _ext(prior_cert.filename)
            if ext not in ALLOWED_IMAGE_EXTS:
                return jsonify({"status": "error", "message": "Prior certification must be an image (jpg, png, webp)."}), 400

            attachments.append({
                "filename": f"prior-cert{ext}",
                "content_bytes": prior_cert.read(),
            })

        if medical_pdf and medical_pdf.filename:
            ext = _ext(medical_pdf.filename)
            if ext not in ALLOWED_PDF_EXTS:
                return jsonify({"status": "error", "message": "Medical certificate must be a PDF."}), 400
            attachments.append({
                "filename": "medical-certificate.pdf",
                "content_bytes": medical_pdf.read(),
            })

        to_email = os.getenv("CONTACT_EMAIL")
        if not to_email:
            return jsonify({"status": "error", "message": "CONTACT_EMAIL missing"}), 500

        subject = f"Course Application: {data['courseTitle']} ({data['fullName']})"
        html_content = create_course_application_template(data)

        success, details = send_email_via_gmail(
            to_email=to_email,
            subject=subject,
            html_content=html_content,
            reply_to_email=data.get("email"),
            attachments=attachments
        )

        if success:
            return jsonify({"status": "success", "message": "Application sent! We'll contact you via email soon."}), 200

        return jsonify({"status": "error", "message": "Failed to send application email", "details": details}), 500

    except Exception as e:
        logger.error("Error in /courses/apply-multipart", exc_info=True)
        return jsonify({"status": "error", "message": "Internal server error"}), 500