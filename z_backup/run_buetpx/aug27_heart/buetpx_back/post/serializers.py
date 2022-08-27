from rest_framework import serializers 
from buetpx.models import Post

class PhotoSerializer(serializers.ModelSerializer):
  # posts = PostSerializer(many=True, read_only=True)

  class Meta:

    # ordering = ['-id']
    model = Post
    fields = ('id',
              'name',
              'email',
              'photo_url',
              'hashedpass',
              'posts'
              )