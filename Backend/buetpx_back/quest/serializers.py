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
              'quest_title',
              'quest_theme',
              'quest_description',
              'start_date',
              'end_date',
              'photo_url',
              'category',
              'status',    
              'reward',          
              
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
  
  
class PostSerializer(serializers.ModelSerializer):
    owner =UserAccountSerializer()
    # owner = serializers.SlugRelatedField(read_only=True, slug_field='name' )
    # print("*******************This is owner*********************")
    # print(owner)
    # serializers.Sl
    category = serializers.SlugRelatedField(read_only=True, slug_field='name' )
    # place = serializers.SlugRelatedField(read_only=True, slug_field='name' )
    # place = PlaceSerializer()
    tags = serializers.StringRelatedField(many=True, read_only=True)
    def get_field_names(self, *args, **kwargs):
        field_names = self.context.get('fields', None)
        if field_names:
            return field_names

        return super(PostSerializer, self).get_field_names(*args, **kwargs)
    
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
                  )
        extra_kwargs = {'tags':{'required': False}}