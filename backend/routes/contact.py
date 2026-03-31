from flask import Blueprint, request, jsonify
import os
import logging
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime

logger = logging.getLogger(__name__)

contact_bp = Blueprint('contact', __name__)

def validate_email_data(data):
    """Validate required email fields"""
    required_fields = ['name', 'email', 'subject', 'message']
    missing_fields = [field for field in required_fields if not data.get(field, '').strip()]
    
    if missing_fields:
        return False, f"Missing required fields: {', '.join(missing_fields)}"
    
    # Basic email validation
    email = data.get('email', '').strip()
    if '@' not in email or '.' not in email.split('@')[-1]:
        return False, "Invalid email format"
    
    return True, None

def create_email_template(name, email, subject, message):
    """Create modern HTML email template"""
    current_date = datetime.now().strftime("%B %d, %Y at %I:%M %p")
    
    html_template = f"""
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Contact Form Submission - Marine Conservation</title>
        <style>
            body {{
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                line-height: 1.6;
                color: #333;
                margin: 0;
                padding: 0;
                background-color: #f4f7f6;
            }}
            .container {{
                max-width: 600px;
                margin: 20px auto;
                background-color: #ffffff;
                border-radius: 12px;
                overflow: hidden;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }}
            .header {{
                background: linear-gradient(135deg, #0d9488 0%, #059669 100%);
                color: white;
                padding: 30px;
                text-align: center;
            }}
            .header h1 {{
                margin: 0;
                font-size: 28px;
                font-weight: 600;
            }}
            .content {{
                padding: 30px;
                background-color: #f1f5f9;
            }}
            .field {{
                margin-bottom: 20px;
                padding: 15px;
                background-color: #f8fafc;
                border-radius: 8px;
                border-left: 4px solid #0d9488;
            }}
            .field-label {{
                font-weight: 600;
                color: #0f766e;
                margin-bottom: 8px;
                font-size: 14px;
                text-transform: uppercase;
                letter-spacing: 0.5px;
            }}
            .field-value {{
                color: #1e293b;
                font-size: 16px;
                word-wrap: break-word;
            }}
            .message-content {{
                background-color: #f8fafc;
                padding: 20px;
                border-radius: 8px;
                margin-top: 10px;
                white-space: pre-wrap;
                font-family: inherit;
            }}
            .footer {{
                background-color: #101727;
                padding: 20px;
                text-align: center;
                font-size: 12px;
                color: white;
            }}
            .badge {{
                display: inline-block;
                background-color: #10b981;
                color: white;
                padding: 4px 12px;
                border-radius: 20px;
                font-size: 12px;
                margin-top: 10px;
            }}
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <img src="https://res.cloudinary.com/dfsxmtyxk/image/upload/v1771384196/GREEN_Circ_uhjl4s.png" alt="GREEN Inc. Logo" style="width: 70px; height: 70px;">
                <p>New Contact Form Submission</p>
                <div class="badge">Received: {current_date}</div>
            </div>
            <div class="content">
                <div class="field">
                    <div class="field-label">Name</div>
                    <div class="field-value">{name}</div>
                </div>
                
                <div class="field">
                    <div class="field-label">Email</div>
                    <div class="field-value">
                        <a href="mailto:{email}" style="color: #0d9488; text-decoration: none;">{email}</a>
                    </div>
                </div>
                
                <div class="field">
                    <div class="field-label">Subject</div>
                    <div class="field-value">{subject}</div>
                </div>
                
                <div class="field">
                    <div class="field-label">Message</div>
                    <div class="message-content">{message}</div>
                </div>
            </div>
            <div class="footer">
                <p>This message was sent from the contact form on your website.</p>
                <p>© 2024 GREEN Inc. Marine Conservation | Sogod Bay Coral Restoration</p>
            </div>
        </div>
    </body>
    </html>
    """
    return html_template

def send_email_via_gmail(to_email, subject, html_content, reply_to_email):
    """
    Send email directly using Gmail SMTP
    """
    try:
        # Gmail SMTP configuration
        smtp_server = os.getenv('SMTP_SERVER', 'smtp.gmail.com')
        smtp_port = int(os.getenv('SMTP_PORT', 587))
        smtp_username = os.getenv('SMTP_USERNAME')
        smtp_password = os.getenv('SMTP_PASSWORD')
        from_email = os.getenv('SMTP_FROM_EMAIL', smtp_username)
        
        # Validate credentials
        if not smtp_username or not smtp_password:
            logger.error("SMTP credentials missing!")
            return False, "SMTP credentials not configured"
        
        logger.info(f"Attempting to send email from {from_email} to {to_email}")
        
        # Create message
        msg = MIMEMultipart('alternative')
        msg['Subject'] = subject
        msg['From'] = f"GREEN Inc. Marine Conservation <{from_email}>"
        msg['To'] = to_email
        msg['Reply-To'] = reply_to_email
        
        # Attach HTML content
        msg.attach(MIMEText(html_content, 'html', 'utf-8'))
        
        # Send email
        with smtplib.SMTP(smtp_server, smtp_port) as server:
            server.set_debuglevel(1)  # Enable debug output
            server.starttls()
            server.login(smtp_username, smtp_password)
            server.send_message(msg)
            
        logger.info(f"✅ Email sent successfully to {to_email}")
        return True, "Email sent successfully via Gmail"
        
    except smtplib.SMTPAuthenticationError as e:
        logger.error(f"❌ Gmail authentication failed: {str(e)}")
        return False, "Email authentication failed. Please check your Gmail app password."
    except smtplib.SMTPException as e:
        logger.error(f"❌ SMTP error: {str(e)}")
        return False, f"SMTP error: {str(e)}"
    except Exception as e:
        logger.error(f"❌ Unexpected error: {str(e)}")
        return False, str(e)

@contact_bp.route('/contact', methods=['POST'])
def send_contact_email():
    try:
        data = request.get_json()
        logger.info(f"📨 Received contact form submission")

        if not data:
            return jsonify({'status': 'error', 'message': 'No data provided'}), 400

        is_valid, error_message = validate_email_data(data)
        if not is_valid:
            return jsonify({'status': 'error', 'message': error_message}), 400

        name = data.get('name', '').strip()
        email = data.get('email', '').strip()
        subject = data.get('subject', '').strip()
        message = data.get('message', '').strip()

        logger.info(f"📝 Processing contact from: {name} <{email}>")

        # Create HTML email content
        html_content = create_email_template(name, email, subject, message)
        email_subject = f"GREEN Inc. Contact Form: {subject}"

        # Get recipient email from environment
        to_email = os.getenv('CONTACT_EMAIL')
        if not to_email:
            logger.error("CONTACT_EMAIL not configured in environment")
            return jsonify({
                'status': 'error',
                'message': 'Email configuration error. Please contact administrator.'
            }), 500

        # Send email via Gmail
        success, details = send_email_via_gmail(
            to_email=to_email,
            subject=email_subject,
            html_content=html_content,
            reply_to_email=email
        )

        if success:
            logger.info(f"✅ Contact form processed successfully for {email}")
            return jsonify({
                'status': 'success',
                'message': 'Thank you for your message! We will get back to you soon.'
            }), 200
        else:
            logger.error(f"❌ Failed to send email: {details}")
            return jsonify({
                'status': 'error',
                'message': f'Failed to send message. Error: {details}'
            }), 500

    except Exception as e:
        logger.error(f"❌ Error in contact endpoint: {str(e)}", exc_info=True)
        return jsonify({
            'status': 'error',
            'message': 'Internal server error. Please try again later.'
        }), 500

@contact_bp.route('/contact/test', methods=['GET'])
def test_email_config():
    """
    Test if Gmail SMTP configuration is properly set up
    """
    missing = []
    smtp_server = os.getenv('SMTP_SERVER')
    smtp_username = os.getenv('SMTP_USERNAME')
    smtp_password = os.getenv('SMTP_PASSWORD')
    contact_email = os.getenv('CONTACT_EMAIL')
    
    if not smtp_server:
        missing.append("SMTP_SERVER")
    if not smtp_username:
        missing.append("SMTP_USERNAME")
    if not smtp_password:
        missing.append("SMTP_PASSWORD")
    if not contact_email:
        missing.append("CONTACT_EMAIL")

    if missing:
        return jsonify({
            'status': 'error',
            'message': f"Missing configuration: {', '.join(missing)}",
            'configured': False
        }), 500

    # Test Gmail connection
    try:
        with smtplib.SMTP(smtp_server, int(os.getenv('SMTP_PORT', 587))) as server:
            server.starttls()
            server.login(smtp_username, smtp_password)
            
        return jsonify({
            'status': 'success',
            'message': 'Gmail SMTP configuration is valid and working!',
            'configured': True,
            'smtp_server': smtp_server,
            'smtp_port': int(os.getenv('SMTP_PORT', 587)),
            'from_email': smtp_username,
            'contact_email': contact_email
        }), 200
    except Exception as e:
        return jsonify({
            'status': 'error',
            'message': f'Gmail authentication failed: {str(e)}',
            'configured': False
        }), 500

@contact_bp.route('/contact/send-test', methods=['POST'])
def send_test_email():
    """
    Send a test email to verify everything works
    """
    try:
        data = request.get_json()
        test_email = (data or {}).get('email') or os.getenv('CONTACT_EMAIL')

        if not test_email:
            return jsonify({'status': 'error', 'message': 'No test email provided'}), 400

        logger.info(f"📧 Sending test email to {test_email}")

        html_content = create_email_template(
            name="Test User",
            email=test_email,
            subject="Test Email Configuration",
            message="This is a test message to verify Gmail SMTP is working correctly. If you received this, your email configuration is working! 🎉"
        )

        success, details = send_email_via_gmail(
            to_email=test_email,
            subject="🌊 GREEN Inc. - Test Email (Gmail SMTP)",
            html_content=html_content,
            reply_to_email=test_email
        )

        if success:
            return jsonify({
                'status': 'success',
                'message': f'Test email sent successfully to {test_email}',
                'details': details
            }), 200
        else:
            return jsonify({
                'status': 'error',
                'message': 'Failed to send test email',
                'details': details
            }), 500

    except Exception as e:
        logger.error(f"❌ Error sending test email: {str(e)}")
        return jsonify({
            'status': 'error',
            'message': 'Failed to send test email',
            'details': str(e)
        }), 500