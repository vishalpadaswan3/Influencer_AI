from flask import Blueprint, request, jsonify
from config.db import Connection
from models.Transcript import Transcript
from bson import ObjectId
import os
from dotenv import load_dotenv
import jwt
from functools import wraps

transcript_bp = Blueprint('transcript', __name__)

# Instantiate the Connection class
db = Connection().get_db()

# Set the collection
collection = db["transcript"]

load_dotenv()


@transcript_bp.route('/tokenhelp1', methods=['POST'])
def tokenhelp1():
    try:
        body = request.json
        global more
        more = body["token"]
        return jsonify({"message": "success"}), 200
    except Exception as e:
        print(e)
        return jsonify({"message": "Error"}), 500

def authentication(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = more
        print(token + "in authentication")
        if not token :
            return jsonify({"status": "error", "message": "Token is missing"}), 401
        
        try:
            data = jwt.decode(token, os.getenv(
                'JWT_SECRET'), algorithms=["HS256"])
            request.environ['influencer_id'] = data['influencer_id']
        except Exception as e:
            return jsonify({"status": "error", "message": str(e)}), 401
        return f(*args, **kwargs)
    return decorated



@transcript_bp.route('/transcripts', methods=['POST'])
@authentication
def create_transcript():
    try:
        influencer_id = request.environ['influencer_id']
        body = request.json
        body['influencer_id'] = influencer_id
        new_transcript = Transcript(body)
        collection.insert_one(new_transcript.__dict__)
        return jsonify({"message": "Success"}), 200
    except Exception as e:
        print(e)
        return jsonify({"message": "Error"}), 500
    
@transcript_bp.route('/transcriptsInfo', methods=['GET'])
@authentication
def get_transcript():
    try:
        influencer_id = request.environ['influencer_id']
        transcript = list(collection.find({"influencer_id": str(influencer_id)}))
        for t in transcript.copy():
            t['_id'] = str(t['_id'])
        return jsonify({"message": "Success", "data": transcript}), 200
    except Exception as e:
        print(e)
        return jsonify({"message": "Error"}), 500
