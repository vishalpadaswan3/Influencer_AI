from flask import request, jsonify
from flask_jwt_extended import JWTManager, jwt_required, get_jwt_identity

# Create a JWTManager instance
jwt = JWTManager()

# Function to initialize the JWTManager with the Flask app
def init_app(app):
    jwt.init_app(app)

# Custom authentication middleware to protect routes
def authentication_middleware(func):
    @jwt_required()
    def wrapper(*args, **kwargs):
        try:
            # Access the JWT token from the Authorization header
            authorization_header = request.headers.get("Authorization", None)
            if not authorization_header or not authorization_header.startswith("Bearer "):
                return jsonify({"message": "Invalid token"}), 401

            jwt_token = authorization_header.split("Bearer ")[1]

            # Validate the JWT token
            current_user_id = get_jwt_identity()

            # Perform any additional authentication checks if required

            # Call the actual route function
            return func(*args, **kwargs)

        except Exception as e:
            return jsonify({"message": "Authentication failed"}), 401

    return wrapper
