from pymongo import MongoClient
from dotenv import load_dotenv
import os

load_dotenv()

class Connection:
    def __init__(self):
        self.client = MongoClient(os.getenv("MONGODB_URL"))
        self.db = self.client.get_database(os.getenv("MONGODB_NAME"))

    def get_db(self):
        return self.db
