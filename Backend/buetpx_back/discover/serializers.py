from rest_framework import serializers 

from buetpx.models import Post, Like
from buetpx.serializers import UserAccountSerializer

class PostLikesSerializer(serializers.ModelSerializer):
    # owner = serializers.SlugRelatedField(read_only=True, slug_field='name' )
    # print("*******************This is owner*********************")
    # print(owner)
    # serializers.Sl
    owner = UserAccountSerializer()
    category = serializers.SlugRelatedField(read_only=True, slug_field='name' )
    place = serializers.SlugRelatedField(read_only=True, slug_field='name' )
    # place = PlaceSerializer()
    tags = serializers.StringRelatedField(many=True, read_only=True)
    
    # likes = Like.objects.filter(post='id').count()

    likes = serializers.SerializerMethodField()

    def get_likes(self, id):
        likes = Like.objects.filter(post=id).count()
        response_data = {}
        response_data['likes'] = likes
        return response_data
    
    class Meta:
        ordering  = ['-category']
        model = Post
        fields = (
                  'id',
                  'post_title',
                  'post_date',
                  'photo_url',
                  'owner',
                  'category',
                  'place',
                  'tags',
                  'likes',
                  )
