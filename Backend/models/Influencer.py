
from mongoengine import Document, StringField, EmailField

class Influencer(Document):

    def __init__(self, body):
        self.name = body['name']
        self.email = body['email']
        self.domain = body['domain']
        self.domain_link = body['domain_link']
        self.password = body['password']

    


# export influencer
