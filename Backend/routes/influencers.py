from flask import Blueprint, request, jsonify
from config.db import Connection
from models.Influencer import Influencer

influencer_bp = Blueprint('influencer', __name__)

# Instantiate the Connection class
db = Connection().get_db()

# Set the collection
Influ_collection = db["influencer"]

@influencer_bp.route('/influencers', methods=['POST'])
def create_influencer():
    try:
        body = request.json
        new_user = Influencer(body)
        Influ_collection.insert_one(new_user.__dict__)
        return jsonify({"message": "Success"}), 200
    except Exception as e:
        print(e)
        return jsonify({"message": "Error"}), 500

