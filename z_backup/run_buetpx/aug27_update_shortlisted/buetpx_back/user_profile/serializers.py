from rest_framework import serializers 
from buetpx.models import Post
from buetpx.models import UserAccount

class PostSerializer(serializers.ModelSerializer):
    owner=serializers.SlugRelatedField(read_only=True, slug_field='name' ,many=False)
    class Meta:
        model=Post
        fields=(
            'id',
            'post_title',
            'photo_url',
            'owner',
        ) 
        
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=UserAccount
        fields=(
            'id',
            'name',
            'email',
            'photo_url',
        )