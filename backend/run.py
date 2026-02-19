from flask import Flask, jsonify
from flask_cors import CORS
import logging
import os
from datetime import datetime

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

def create_app():
    app = Flask(__name__)
    
    # CORS configuration
    CORS(app, origins=[
        "http://localhost:5173", 
        "http://localhost:8888", 
        "https://marineconserve.netlify.app",
        "https://your-actual-frontend-domain.com"
    ])
    
    # Import and register routes
    from routes.contact import contact_bp
    app.register_blueprint(contact_bp, url_prefix='/api')
    
    @app.route('/')
    def health_check():
        return jsonify({
            'status': 'success',
            'message': 'Marine Conservation API is running',
            'timestamp': datetime.now().isoformat()
        })

    @app.errorhandler(404)
    def not_found(error):
        return jsonify({
            'status': 'error',
            'message': 'Endpoint not found'
        }), 404

    @app.errorhandler(500)
    def internal_error(error):
        return jsonify({
            'status': 'error',
            'message': 'Internal server error'
        }), 500
    
    return app

# Create the app instance
app = create_app()

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(debug=True, host='0.0.0.0', port=port)