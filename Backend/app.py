import os
from flask import Flask
from dotenv import load_dotenv
from config.db import Connection
from Middleware.auth import init_app, authentication_middleware
from routes.influencers import influencer_bp
from routes.transcript import transcript_bp
from routes.qanda import qanda_bp
from flask_cors import CORS

# Load environment variables from .env file
load_dotenv()


app = Flask(__name__)
CORS(app)

# Get the JWT secret key from the environment variables
jwt_secret_key = os.getenv("JWT_SECRET_KEY")

# Check if the JWT secret key is set in the .env file
if jwt_secret_key is None:
    raise ValueError("JWT_SECRET_KEY is not set in the .env file")

# Set the JWT secret key in the app configuration
app.config["JWT_SECRET_KEY"] = jwt_secret_key

# Initialize JWTManager with the Flask app
init_app(app)

# Instantiate the Connection class
db = Connection().get_db()

# Register the route blueprints
app.register_blueprint(influencer_bp)
app.register_blueprint(transcript_bp)
app.register_blueprint(qanda_bp)

@app.route('/')
def hello_world():
    return 'Welcome to Influencer AI'

# Apply the authentication middleware to specific routes
@app.route('/protected', methods=['GET'])
@authentication_middleware
def protected_route():
    # This route is now protected and requires authentication
    # You can access the user's identity from the JWT token using get_jwt_identity()
    current_user_id = get_jwt_identity()
    print(current_user_id)
    return jsonify({"message": f"Protected data for user {current_user_id}"}), 200

if __name__ == '__main__':
    app.run(debug=True)
