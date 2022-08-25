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