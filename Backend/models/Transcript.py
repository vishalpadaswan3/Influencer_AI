
from mongoengine import Document, StringField, EmailField

class Transcript(Document):

    def __init__(self, body):
        self.transcript = body['transcript']
        self.influencer_id = body['influencer_id']

    


# export influencer
