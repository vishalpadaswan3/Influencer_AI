from flask import Blueprint, request, jsonify
from config.db import Connection
from models.Transcript import Transcript


transcript_bp = Blueprint('transcript', __name__)

# Instantiate the Connection class
db = Connection().get_db()

# Set the collection
collection = db["transcript"]

@transcript_bp.route('/transcripts', methods=['POST'])
def create_transcript():
    try:
        body = request.json
        new_transcript = Transcript(body)
        collection.insert_one(new_transcript.__dict__)
        return jsonify({"message": "Success"}), 200
    except Exception as e:
        print(e)
        return jsonify({"message": "Error"}), 500
