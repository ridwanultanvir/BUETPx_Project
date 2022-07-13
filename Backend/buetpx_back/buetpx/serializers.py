from rest_framework import serializers 
from buetpx.models import Tutorial
from buetpx.models import Post
from buetpx.models import Place
from buetpx.models import Tags
from buetpx.models import Category
from buetpx.models import Comment
from buetpx.models import UserAccount

 
 
class TutorialSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = Tutorial
        fields = ('id',
                  'title',
                  'description',
                  'published')


class PostSerializer(serializers.ModelSerializer):
    # posted_by = serializers.ReadOnlyField(source='owner.id')
    # category_name = serializers.ReadOnlyField(source='category.name')
    # place_name = serializers.ReadOnlyField(source='place.name')
    # tags_name = serializers.ReadOnlyField(source='tags.name')
    
    class Meta:
        ordering  = ['-post_date']
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


class TagsSerializer(serializers.ModelSerializer):
  
  posts = PostSerializer(many=True, read_only=True)

  class Meta:

    ordering = ['-id']
    model = Tags
    fields = ('id',
              'name',
              'posts'
              )
    extra_kwargs = {'tags': {'required': False}}



class CategorySerializer(serializers.ModelSerializer):
  # posts = StringRelatedField(many=True, read_only=True)
  
  class Meta:

    ordering = ['-id']
    model = Category
    fields = ('id',
              'name',
              'posts'
              )

class PlaceSerializer(serializers.ModelSerializer):
  # posts = PostSerializer(many=True, read_only=True)

  class Meta:

    ordering = ['-id']
    model = Place
    fields = ('id',
              'name',
              'locality',
              'sublocality',
              'city',
              'country',
              'posts'
              )


class UserAccountSerializer(serializers.ModelSerializer):
  # posts = PostSerializer(many=True, read_only=True)

  class Meta:

    ordering = ['-id']
    model = UserAccount
    fields = ('id',
              'email',
              'photo_url',
              'hashedpass',
              'posts'
              )