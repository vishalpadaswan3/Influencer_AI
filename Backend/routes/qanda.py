from flask import Blueprint, request, jsonify
from config.db import Connection
from models.QandA import QandA

qanda_bp = Blueprint('qanda', __name__)

# Instantiate the Connection class
db = Connection().get_db()

# Set the collection
collection = db["qanda"]

@qanda_bp.route('/qanda', methods=['POST'])
def create_qanda():
    try:
        body = request.json
        new_qanda = QandA(body)
        collection.insert_one(new_qanda.__dict__)
        return jsonify({"message": "Success"}), 200
    except Exception as e:
        print(e)
        return jsonify({"message": "Error"}), 500
