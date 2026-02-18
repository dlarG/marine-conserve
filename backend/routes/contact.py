from flask import Blueprint, request, jsonify
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
import logging
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
    html_template = f"""
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Contact Form Submission - Marine Conservation</title>
        <style>
            /* Reset styles */
            * {{
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }}
            
            body {{
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
                line-height: 1.6;
                color: #1e293b;
                background-color: #f1f5f9;
                margin: 0;
                padding: 20px;
            }}
            
            .email-wrapper {{
                max-width: 600px;
                margin: 0 auto;
                background-color: #ffffff;
                border-radius: 24px;
                overflow: hidden;
                box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.1);
            }}
            
            /* Header with wave pattern */
            .header {{
                background: linear-gradient(135deg, #0f766e 0%, #059669 100%);
                padding: 40px 30px;
                position: relative;
                text-align: center;
            }}
            
            .header::after {{
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                height: 30px;
                background: linear-gradient(to bottom right, transparent 49%, #ffffff 50%);
            }}
            
            .header-content {{
                position: relative;
                z-index: 2;
            }}
            
            .header-icon {{
                width: 80px;
                height: 80px;
                background: rgba(255, 255, 255, 0.2);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 auto 20px;
                font-size: 40px;
            }}
            
            .header h1 {{
                color: white;
                margin: 0;
                font-size: 28px;
                font-weight: 600;
                letter-spacing: -0.5px;
            }}
            
            .header-badge {{
                display: inline-block;
                background: rgba(255, 255, 255, 0.15);
                color: white;
                padding: 6px 16px;
                border-radius: 30px;
                font-size: 14px;
                margin-top: 15px;
                font-weight: 500;
            }}
            
            /* Content area */
            .content {{
                padding: 40px 35px;
                background: #ffffff;
            }}
            
            .intro {{
                background: #f0fdf4;
                border-left: 4px solid #059669;
                padding: 16px 20px;
                border-radius: 12px;
                margin-bottom: 35px;
                font-size: 15px;
                color: #065f46;
                display: flex;
                align-items: center;
                gap: 12px;
            }}
            
            .intro-icon {{
                font-size: 24px;
                line-height: 1;
            }}
            
            .section-title {{
                color: #0f766e;
                font-size: 18px;
                font-weight: 600;
                margin-bottom: 20px;
                padding-bottom: 10px;
                border-bottom: 2px solid #e2e8f0;
                display: flex;
                align-items: center;
                gap: 8px;
            }}
            
            .section-title span {{
                background: #0f766e;
                color: white;
                width: 28px;
                height: 28px;
                border-radius: 8px;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                font-size: 14px;
            }}
            
            /* Card grid layout */
            .info-grid {{
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 20px;
                margin-bottom: 30px;
            }}
            
            .info-card {{
                background: #f8fafc;
                border-radius: 16px;
                padding: 18px;
                border: 1px solid #e2e8f0;
                transition: all 0.2s ease;
                margin-bottom: 10px;
            }}
            
            .info-card:hover {{
                border-color: #0f766e;
                box-shadow: 0 4px 12px rgba(15, 118, 110, 0.1);
            }}
            
            .info-label {{
                font-size: 12px;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                color: #64748b;
                margin-bottom: 6px;
                display: flex;
                align-items: center;
                gap: 4px;
            }}
            
            .info-value {{
                font-size: 16px;
                font-weight: 600;
                color: #1e293b;
                word-break: break-word;
            }}
            
            .info-value.small {{
                font-size: 14px;
                font-weight: 400;
            }}
            
            /* Message section */
            .message-section {{
                background: #f8fafc;
                border-radius: 20px;
                padding: 24px;
                margin-top: -10px;
                border: 1px solid #e2e8f0;
            }}
            
            .message-header {{
                display: flex;
                align-items: center;
                gap: 8px;
                margin-bottom: 15px;
                color: #0f766e;
                font-weight: 600;
            }}
            
            .message-content {{
                background: white;
                padding: 20px;
                border-radius: 12px;
                border: 1px solid #e2e8f0;
                font-size: 15px;
                line-height: 1.7;
                color: #334155;
                white-space: pre-wrap;
            }}
            
            .message-content::first-line {{
                font-weight: 500;
                color: #1e293b;
            }}
            
            /* Meta information */
            .meta-info {{
                display: flex;
                justify-content: space-between;
                align-items: center;
                background: #f1f5f9;
                padding: 15px 20px;
                border-radius: 12px;
                margin-top: 20px;
                font-size: 14px;
                color: #475569;
            }}
            
            .timestamp {{
                display: flex;
                align-items: center;
                gap: 6px;
            }}
            
            .timestamp-icon {{
                font-size: 16px;
            }}
            
            /* Divider */
            .divider {{
                height: 1px;
                background: linear-gradient(to right, transparent, #e2e8f0, transparent);
                margin: 30px 0;
            }}
            
            /* Action buttons */
            .actions {{
                text-align: center;
                margin: 35px 0 20px;
            }}
            
            .reply-button {{
                display: inline-block;
                background: #0f763a;
                color: white;
                text-decoration: none;
                padding: 14px 32px;
                border-radius: 40px;
                font-weight: 600;
                font-size: 16px;
                box-shadow: 0 8px 16px -4px rgba(15, 118, 110, 0.3);
                transition: all 0.2s ease;
            }}
            
            .reply-button:hover {{
                background: #059669;
                transform: translateY(-2px);
                box-shadow: 0 12px 20px -8px rgba(15, 118, 110, 0.4);
            }}
            
            /* Footer */
            .footer {{
                background: #f8fafc;
                padding: 30px 35px 25px;
                text-align: center;
                border-top: 1px solid #e2e8f0;
            }}
            
            .footer-logo {{
                font-size: 24px;
                font-weight: 700;
                color: #0f766e;
                margin-bottom: 15px;
                letter-spacing: -0.5px;
            }}
            
            .footer-text {{
                color: #64748b;
                font-size: 13px;
                line-height: 1.6;
                margin: 5px 0;
            }}
            
            .footer-highlight {{
                background: #f1f5f9;
                padding: 12px;
                border-radius: 30px;
                display: inline-block;
                margin-top: 15px;
                font-size: 14px;
                color: #1e293b;
                border: 1px solid #e2e8f0;
            }}
            
            .footer-highlight strong {{
                color: #0f766e;
            }}
            
            /* Responsive */
            @media (max-width: 600px) {{
                .content {{
                    padding: 30px 20px;
                }}
                
                .info-grid {{
                    grid-template-columns: 1fr;
                }}
                
                .header h1 {{
                    font-size: 24px;
                }}
                
                .reply-button {{
                    display: block;
                    text-align: center;
                }}
            }}
        </style>
    </head>
    <body>
        <div class="email-wrapper">
            <div class="header">
                <div class="header-content">
                    <div class="header-icon">
                        <img src="https://res.cloudinary.com/dfsxmtyxk/image/upload/v1771383563/GREEN_Circ_buvqxc.png" 
                            alt="GREEN Inc. Logo" 
                            />
                    </div>
                    <h1>New Contact Form Submission</h1>
                    <div class="header-badge">GREEN Inc. Marine Conservation</div>
                </div>
            </div>
            
            <div class="content">
                <div class="intro">
                    <span>You've received a new inquiry from your website contact form.</span>
                </div>
                
                <div class="section-title">
                    Contact Information
                </div>
                
                <div class="info-grid">
                    <div class="info-card">
                        <div class="info-label">
                            Full Name
                        </div>
                        <div class="info-value">{name}</div>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-label">
                            Email Address
                        </div>
                        <div class="info-value small">{email}</div>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-label">
                            Subject
                        </div>
                        <div class="info-value">{subject}</div>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-label">
                            Submitted
                        </div>
                        <div class="info-value small">{datetime.now().strftime('%B %d, %Y at %I:%M %p')}</div>
                    </div>
                </div>
                
                <div class="message-section">
                    <div class="message-header">
                        Message Content
                    </div>
                    <div class="message-content">
                        {message.replace(chr(10), '<br>')}
                    </div>
                </div>
                
                <div class="divider"></div>
                
                <div class="actions">
                    <a href="mailto:{email}?subject=Re: {subject}" class="reply-button">
                        ✉️ Reply to {name}
                    </a>
                </div>
                
                <div class="meta-info">
                    <div class="timestamp">
                        <span class="timestamp-icon">⏱</span>
                        Response expected within 24-48 hours
                    </div>
                    <div>Secure inquiry</div>
                </div>
            </div>
            
            <div class="footer">
                <div class="footer-logo">GREEN Inc.</div>
                <div class="footer-text">Marine Conservation Initiative</div>
                <div class="footer-text">Preserving our oceans for future generations</div>
                
                <div class="footer-highlight">
                    <strong>Quick reply to:</strong> {email}
                </div>
                
                <div style="margin-top: 20px; font-size: 11px; color: #94a3b8;">
                    This is an automated message from your website contact form.<br>
                    Please do not reply directly to this email.
                </div>
            </div>
        </div>
    </body>
    </html>
    """
    return html_template

def send_email_via_mailtrap(to_email, subject, html_content, reply_to_email):
    """Send email using SMTP (works with both mailtrap and Mailtrap)"""
    try:
        # Get SMTP credentials from environment variables
        smtp_username = os.getenv('MAILTRAP_SMTP_USERNAME')
        smtp_password = os.getenv('MAILTRAP_SMTP_PASSWORD')
        smtp_server = os.getenv('MAILTRAP_SMTP_SERVER', 'sandbox.smtp.mailtrap.io')
        smtp_port = int(os.getenv('MAILTRAP_SMTP_PORT', '2525'))  # Use port from .env
        from_email = os.getenv('MAILTRAP_FROM_EMAIL', 'noreply@marineconservation.com')
        
        if not smtp_username or not smtp_password:
            raise ValueError("SMTP credentials not configured")
        
        logger.info(f"SMTP Config - Server: {smtp_server}, Port: {smtp_port}, Username: {smtp_username}")
        
        # Create message
        msg = MIMEMultipart('alternative')
        msg['Subject'] = subject
        msg['From'] = f"Marine Conservation Contact <{from_email}>"
        msg['To'] = to_email
        msg['Reply-To'] = reply_to_email
        
        # Add HTML content
        html_part = MIMEText(html_content, 'html')
        msg.attach(html_part)
        
        # Connect to SMTP server and send email
        logger.info(f"Connecting to {smtp_server}:{smtp_port}")
        
        with smtplib.SMTP(smtp_server, smtp_port) as server:
            server.starttls()
            logger.info("Starting TLS...")
            server.login(smtp_username, smtp_password)
            logger.info("Login successful")
            server.send_message(msg)
            
        logger.info(f"Email sent successfully to {to_email}")
        return True, "Email sent successfully"
        
    except smtplib.SMTPAuthenticationError as e:
        logger.error(f"SMTP Authentication failed: {str(e)}")
        return False, "Email authentication failed. Please check credentials."
    except smtplib.SMTPException as e:
        logger.error(f"SMTP error: {str(e)}")
        return False, f"Email server error: {str(e)}"
    except Exception as e:
        logger.error(f"Failed to send email: {str(e)}")
        return False, f"Failed to send email: {str(e)}"

@contact_bp.route('/contact', methods=['POST'])
def send_contact_email():
    """Handle contact form submissions"""
    try:
        # Get JSON data from request
        data = request.get_json()
        
        if not data:
            return jsonify({
                'status': 'error',
                'message': 'No data provided'
            }), 400
        
        # Validate data
        is_valid, error_message = validate_email_data(data)
        if not is_valid:
            return jsonify({
                'status': 'error',
                'message': error_message
            }), 400
        
        # Extract form data
        name = data.get('name', '').strip()
        email = data.get('email', '').strip()
        subject = data.get('subject', '').strip()
        message = data.get('message', '').strip()
        
        logger.info(f"Processing contact form from {name} ({email})")
        
        # Create email content
        html_content = create_email_template(name, email, subject, message)
        email_subject = f"GREEN Inc. Inquiry: {subject}"
        
        # Send email to your organization
        to_email = os.getenv('CONTACT_EMAIL', 'info@sogodbaycoralrestoration.com')
        success, result_message = send_email_via_mailtrap(
            to_email=to_email,
            subject=email_subject,
            html_content=html_content,
            reply_to_email=email
        )
        
        if success:
            return jsonify({
                'status': 'success',
                'message': 'Thank you for your message! We will get back to you soon.'
            }), 200
        else:
            return jsonify({
                'status': 'error',
                'message': 'Failed to send message. Please try again later.'
            }), 500
            
    except Exception as e:
        logger.error(f"Error in contact endpoint: {str(e)}")
        return jsonify({
            'status': 'error',
            'message': 'Internal server error. Please try again later.'
        }), 500

@contact_bp.route('/contact/test', methods=['GET'])
def test_email_config():
    """Test endpoint to verify email configuration"""
    try:
        # Check if all required environment variables are set
        required_vars = ['MAILTRAP_SMTP_USERNAME', 'MAILTRAP_SMTP_PASSWORD', 'CONTACT_EMAIL']
        missing_vars = [var for var in required_vars if not os.getenv(var)]
        
        if missing_vars:
            return jsonify({
                'status': 'error',
                'message': f'Missing environment variables: {", ".join(missing_vars)}'
            }), 500
        
        return jsonify({
            'status': 'success',
            'message': 'Email configuration is valid',
            'smtp_server': os.getenv('MAILTRAP_SMTP_SERVER', 'smtp.mailtrap.io'),
            'smtp_port': os.getenv('MAILTRAP_SMTP_PORT', '2525'),
            'from_email': os.getenv('MAILTRAP_FROM_EMAIL', 'noreply@your-domain.com'),
            'contact_email': os.getenv('CONTACT_EMAIL')
        })
        
    except Exception as e:
        return jsonify({
            'status': 'error',
            'message': str(e)
        }), 500