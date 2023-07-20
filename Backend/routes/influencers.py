from flask import Blueprint, request, jsonify
from config.db import Connection
from models.Influencer import Influencer
from flask_jwt_extended import create_access_token

influencer_bp = Blueprint('influencer', __name__)

# Instantiate the Connection class
db = Connection().get_db()

# Set the collection
Influ_collection = db["influencer"]

@influencer_bp.route('/influencers/register', methods=['POST'])
def create_influencer():
    try:
        body = request.json
        new_user = Influencer(body)
        Influ_collection.insert_one(new_user.__dict__)
        return jsonify({"message": "Success"}), 200
    except Exception as e:
        print(e)
        return jsonify({"message": "Error"}), 500


# login route for influencer 
@influencer_bp.route('/influencers/login', methods=['POST'])
def login_influencer():
    try:
        body = request.json
        user = Influ_collection.find_one({"email": body["email"]})
        if user and user["password"] == body["password"]:
            # Generate JWT token with user's identity (user ID or username)
            user_id = str(user["_id"])
            print(user_id)
            access_token = create_access_token(identity=user_id)
            
            # Return the JWT token in the response
            return jsonify({"message": "Success", "access_token": access_token}), 200
        else:
            return jsonify({"message": "Error"}), 401
    except Exception as e:
        print(e)
        return jsonify({"message": "Error"}), 500
