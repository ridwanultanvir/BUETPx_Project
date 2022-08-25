from rest_framework import serializers 
from buetpx.models import Post

class PostInsertSerializer(serializers.ModelSerializer):
   
  
  class Meta:

    model = Post
    fields = ('id',
              'post_title',
              'post_date',
              'photo_url',
              'owner',
              'category',
              'place'
              )