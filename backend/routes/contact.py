from flask import Blueprint, request, jsonify
import os
import logging
from datetime import datetime
import resend # type: ignore
from datetime import datetime

logger = logging.getLogger(__name__)

contact_bp = Blueprint('contact', __name__)

# Initialize Resend with API key
resend.api_key = os.getenv('RESEND_API_KEY')

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
                color: white;
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
            }}
            
            .section-title {{
                color: #0f766e;
                font-size: 18px;
                font-weight: 600;
                margin-bottom: 20px;
                padding-bottom: 10px;
                border-bottom: 2px solid #e2e8f0;
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
            }}
            
            .info-label {{
                font-size: 12px;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                color: #64748b;
                margin-bottom: 6px;
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
                border: 1px solid #e2e8f0;
                margin-bottom: 30px;
            }}
            
            .message-header {{
                color: #0f766e;
                font-weight: 600;
                margin-bottom: 15px;
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
            
            /* Action buttons */
            .actions {{
                text-align: center;
                margin: 35px 0 20px;
            }}
            
            .reply-button {{
                display: inline-block;
                background: #0f766e;
                color: white;
                text-decoration: none;
                padding: 14px 32px;
                border-radius: 40px;
                font-weight: 600;
                font-size: 16px;
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
            }}
            
            .footer-text {{
                color: #64748b;
                font-size: 13px;
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
            }}
        </style>
    </head>
    <body>
        <div class="email-wrapper">
            <div class="header">
                <div class="header-content">
                    <div class="header-icon">🌊</div>
                    <h1>New Contact Form Submission</h1>
                    <div class="header-badge">GREEN Inc. Marine Conservation</div>
                </div>
            </div>
            
            <div class="content">
                <div class="intro">
                    <span>📧 You've received a new inquiry from your website contact form.</span>
                </div>
                
                <div class="section-title">
                    📋 Contact Information
                </div>
                
                <div class="info-grid">
                    <div class="info-card">
                        <div class="info-label">👤 Full Name</div>
                        <div class="info-value">{name}</div>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-label">📧 Email Address</div>
                        <div class="info-value small">{email}</div>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-label">📋 Subject</div>
                        <div class="info-value">{subject}</div>
                    </div>
                    
                    <div class="info-card">
                        <div class="info-label">🕐 Submitted</div>
                        <div class="info-value small">{datetime.now().strftime('%B %d, %Y at %I:%M %p')}</div>
                    </div>
                </div>
                
                <div class="message-section">
                    <div class="message-header">💬 Message Content</div>
                    <div class="message-content">{message.replace(chr(10), '<br>')}</div>
                </div>
                
                <div class="actions">
                    <a href="mailto:{email}?subject=Re: {subject}" class="reply-button">
                        ✉️ Reply to {name}
                    </a>
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

def send_email_via_resend(to_email, subject, html_content, reply_to_email, sender_name):
    """Send email using Resend API"""
    try:
        # Get configuration from environment
        from_email = os.getenv('RESEND_FROM_EMAIL', 'info@sogodbaycoralrestoration.com')
        from_name = os.getenv('RESEND_FROM_NAME', 'GREEN Inc. Marine Conservation')
        
        # Prepare email data
        email_data = {
            "from": f"{from_name} <{from_email}>",
            "to": [to_email],
            "subject": subject,
            "html": html_content,
            "reply_to": [reply_to_email],
            "headers": {
                "X-Entity-Ref-ID": f"contact-form-{datetime.now().strftime('%Y%m%d-%H%M%S')}"
            }
        }
        
        logger.info(f"Sending email via Resend to {to_email}")
        logger.info(f"From: {from_name} <{from_email}>")
        logger.info(f"Reply-to: {reply_to_email}")
        
        # Send email using Resend
        response = resend.Emails.send(email_data)
        
        logger.info(f"Resend response: {response}")
        
        if response and response.get('id'):
            logger.info(f"Email sent successfully. Message ID: {response['id']}")
            return True, f"Email sent successfully (ID: {response['id']})"
        else:
            logger.error(f"Unexpected Resend response: {response}")
            return False, "Failed to send email - no message ID received"
        
    except Exception as e:
        logger.error(f"Resend API error: {str(e)}")
        return False, f"Failed to send email: {str(e)}"

@contact_bp.route('/contact', methods=['POST'])
def send_contact_email():
    """Handle contact form submissions using Resend"""
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
        email_subject = f"GREEN Inc. Contact Form: {subject}"
        
        # Send email to your organization
        to_email = os.getenv('CONTACT_EMAIL', 'info@sogodbaycoralrestoration.com')
        success, result_message = send_email_via_resend(
            to_email=to_email,
            subject=email_subject,
            html_content=html_content,
            reply_to_email=email,
            sender_name=name
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
    """Test endpoint to verify Resend configuration"""
    try:
        # Check if API key is configured
        api_key = os.getenv('RESEND_API_KEY')
        if not api_key:
            return jsonify({
                'status': 'error',
                'message': 'RESEND_API_KEY not configured'
            }), 500
        
        # Check if API key format is correct
        if not api_key.startswith('re_'):
            return jsonify({
                'status': 'error',
                'message': 'Invalid Resend API key format'
            }), 500
        
        return jsonify({
            'status': 'success',
            'message': 'Resend configuration is valid',
            'api_key_prefix': api_key[:8] + '...',
            'from_email': os.getenv('RESEND_FROM_EMAIL', 'info@sogodbaycoralrestoration.com'),
            'from_name': os.getenv('RESEND_FROM_NAME', 'GREEN Inc. Marine Conservation'),
            'contact_email': os.getenv('CONTACT_EMAIL')
        })
        
    except Exception as e:
        return jsonify({
            'status': 'error',
            'message': str(e)
        }), 500

@contact_bp.route('/contact/send-test', methods=['POST'])
def send_test_email():
    """Send a test email to verify Resend is working"""
    try:
        # Get test email from request
        data = request.get_json()
        test_email = data.get('email') if data else os.getenv('CONTACT_EMAIL')
        
        if not test_email:
            return jsonify({
                'status': 'error',
                'message': 'No test email provided'
            }), 400
        
        # Create test email content
        html_content = create_email_template(
            name="Test User",
            email=test_email,
            subject="Test Email Configuration",
            message="This is a test message to verify that Resend API is working correctly."
        )
        
        # Send test email
        success, result_message = send_email_via_resend(
            to_email=test_email,
            subject="GREEN Inc. - Test Email",
            html_content=html_content,
            reply_to_email=test_email,
            sender_name="Test User"
        )
        
        if success:
            return jsonify({
                'status': 'success',
                'message': f'Test email sent successfully to {test_email}',
                'details': result_message
            }), 200
        else:
            return jsonify({
                'status': 'error',
                'message': 'Failed to send test email',
                'details': result_message
            }), 500
            
    except Exception as e:
        logger.error(f"Error sending test email: {str(e)}")
        return jsonify({
            'status': 'error',
            'message': 'Failed to send test email',
            'details': str(e)
        }), 500