from flask import Blueprint, request, jsonify
import os
import logging
from datetime import datetime

from routes.contact import send_email_via_gmail  # reuse your SMTP sender

logger = logging.getLogger(__name__)

courses_bp = Blueprint("courses", __name__)

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

@courses_bp.route("/courses/apply", methods=["POST"])
def apply_course():
    try:
        data = request.get_json() or {}
        ok, err = validate_application_data(data)
        if not ok:
            return jsonify({"status": "error", "message": err}), 400

        to_email = os.getenv("CONTACT_EMAIL")
        if not to_email:
            return jsonify({
                "status": "error",
                "message": "Email configuration error. CONTACT_EMAIL missing."
            }), 500

        course_title = data.get("courseTitle")
        applicant = data.get("fullName")
        subject = f"Course Application: {course_title} ({applicant})"

        html_content = create_course_application_template(data)

        success, details = send_email_via_gmail(
            to_email=to_email,
            subject=subject,
            html_content=html_content,
            reply_to_email=data.get("email")
        )

        if success:
            return jsonify({
                "status": "success",
                "message": "Application sent! We'll contact you via email soon."
            }), 200

        return jsonify({
            "status": "error",
            "message": "Failed to send application email",
            "details": details
        }), 500

    except Exception as e:
        logger.error(f"Error in course application endpoint: {str(e)}", exc_info=True)
        return jsonify({"status": "error", "message": "Internal server error"}), 500