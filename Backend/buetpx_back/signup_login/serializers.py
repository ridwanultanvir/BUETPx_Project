from rest_framework import serializers 
from buetpx.models import UserAccount

class SignupSerializer(serializers.ModelSerializer):
  # posts = PostSerializer(many=True, read_only=True)

  class Meta:

    # ordering = ['-id']
    model = UserAccount
    fields = ('id',
              'name',
              'email',
              'photo_url',
              'hashedpass'
              )
    