from flask import Flask
from dotenv import load_dotenv
from config.db import Connection
from routes.influencers import influencer_bp
from routes.transcript import transcript_bp
from routes.qanda import qanda_bp

load_dotenv()

app = Flask(__name__)

# Instantiate the Connection class
db = Connection().get_db()

# Register the route blueprints
app.register_blueprint(influencer_bp)
app.register_blueprint(transcript_bp)
app.register_blueprint(qanda_bp)

@app.route('/')
def hello_world():
    return 'Welcome to Influencer AI'

if __name__ == '__main__':
    app.run(debug=True)
