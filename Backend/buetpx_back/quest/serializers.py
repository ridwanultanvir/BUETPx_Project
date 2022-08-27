from unicodedata import category
from rest_framework import serializers 
from buetpx.models import Tutorial
from buetpx.models import Post
from buetpx.models import Place
from buetpx.models import Tags
from buetpx.models import Category
from buetpx.models import Comment
from buetpx.models import Like, LikeCount
# from buetpx.models import Like

from buetpx.models import UserAccount
from buetpx.serializers import LikeSerializer,CommentSerializer, CommentSerializer2, TutorialSerializer,PostSerializer,PlaceSerializer,UserAccountSerializer,CategorySerializer
from quest.models import Quest, Submission


class QuestInsertSerializer(serializers.ModelSerializer):
    
  class Meta:

    ordering = ['-id']
    model = Quest
    fields = ('id',
              'title',
              'theme',
              'description',
              'startDate',
              'endDate',
              'photoUrl',
              'category',
              'status',    
              'reward',          
              
              )
class SubmissionPostSerializer(serializers.ModelSerializer):
    post = PostSerializer()
    class Meta:
      model = Submission
      fields = ('id',
                'quest',
                'post',
                'shortlisted',
      )

class QuestStatusSerializer(serializers.ModelSerializer):
    
  class Meta:

    ordering = ['-id']
    model = Quest
    fields = (
              'status',          
              )
class SubmissionInsertSerializer(serializers.ModelSerializer):
    
  class Meta:

    ordering = ['-id']

    model = Submission
    fields = ('id',
              'quest',
              'post',
              'shortlisted',      
              )
  
    # if request.method == 'GET':       

    #     num_likes = Like.objects.filter(post=postid).count()
    #     print("likes:", num_likes)         
    #     response_data = {}
    #     response_data['num_likes'] = num_likes
    #     return JsonResponse(response_data, safe=False)


class PostLikeSerializer(serializers.ModelSerializer):
    # owner =serializers.SlugRelatedField(read_only=True, slug_field='name' )
    # owner = serializers.SlugRelatedField(read_only=True, slug_field='name' )
    # print("*******************This is owner*********************")
    # print(owner)
    # serializers.Sl
    category = serializers.SlugRelatedField(read_only=True, slug_field='name' )
    # place = serializers.SlugRelatedField(read_only=True, slug_field='name' )
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
        # ordering  = ['-post_date']
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
