
from mongoengine import Document, StringField, EmailField

class User(Document):

    def __init__(self, body):
        self.answer = body['answer']
        self.question = body['question']
        self.influencer_id = body['influencer_id']

    


# export influencer
