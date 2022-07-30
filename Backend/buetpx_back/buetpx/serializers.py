from unicodedata import category
from rest_framework import serializers 
from buetpx.models import Tutorial
from buetpx.models import Post
from buetpx.models import Place
from buetpx.models import Tags
from buetpx.models import Category
from buetpx.models import Comment
from buetpx.models import Like
from buetpx.models import UserAccount

 
 
class TutorialSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = Tutorial
        fields = ('id',
                  'title',
                  'description',
                  'published')
        
class UserAccountSerializer(serializers.ModelSerializer):
  # posts = PostSerializer(many=True, read_only=True)

  class Meta:

    # ordering = ['-id']
    model = UserAccount
    fields = ('id',
              'name',
              'email',
              'photo_url',
              'hashedpass',
              'posts'
              )
    
class PlaceSerializer(serializers.ModelSerializer):
  # posts = PostSerializer(many=True, read_only=True)

  class Meta:

    # ordering = ['-id']
    model = UserAccount
    fields = ('id',
              'city',
              'country'
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
        
        

class PostSerializer2(serializers.ModelSerializer):
    category = serializers.SlugRelatedField(read_only=True, slug_field='name' )
    owner = serializers.SlugRelatedField(read_only=True, slug_field='name' )
    place = serializers.SlugRelatedField(read_only=True, slug_field='name' )
    tags = serializers.StringRelatedField(many=True, read_only=True)
    def get_field_names(self, *args, **kwargs):
        field_names = self.context.get('fields', None)
        if field_names:
            return field_names    
    
    
    class Meta:

          
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

    # ordering = ['-id']
    model = Category
    fields = ('id',
              'name',
              'posts'
              )




class PlaceSerializer(serializers.ModelSerializer):


  class Meta:

    ordering = ['-id']
    model = Place
    fields = ('id',
              'name',
              # 'locality',
              # 'sublocality',
              'city',
              'country',
              'posts',
              )

# user_id  = je comment korse 
class ReactionSerializer(serializers.ModelSerializer):
  
  post = serializers.SlugRelatedField(read_only=True, slug_field='post_title' )
  class Meta:

    ordering = ['-id']
    model = Comment
    fields = ('id',
              'comment_txt',
              'comment_date',
              'post'
              )

# user_id  = je comment korse 
class CommentSerializer(serializers.ModelSerializer):
  
  user = serializers.SlugRelatedField(read_only=True, slug_field='name' )
  
  class Meta:

    ordering = ['-id']
    model = Comment
    fields = ('id',
              'comment_txt',
              'comment_date',
              'user'
              )



class CommentInsertSerializer(serializers.ModelSerializer):
   
  
  class Meta:

    model = Comment
    fields = ('id',
              'comment_txt',
              'comment_date',
              'user',
              'post'
              )



class LikeSerializer(serializers.ModelSerializer):
  
  user = serializers.SlugRelatedField(read_only=True, slug_field='name' )
  
  num_likes = serializers.SerializerMethodField()

  def get_num_likes(self, obj):
    try:
        return obj.num_likes
    except:
        return None
  
  class Meta:

    ordering = ['-id']
    model = Like
    fields = ('id',
              'post',
              'user',
              'like_date',
              'num_likes'
              )


# category; tag; location; comment; (num of like); 
# class SinglePostSerializer(serializers.ModelSerializer):
#     place = PlaceSerializer()
#     category = CategorySerializer()
#     # tags = TagsSerializer()
#     tags = serializers.StringRelatedField(many=True, read_only=True)
    
    
#     class Meta:

#       ordering = ['-id']
#       model = Post
#       fields = ('id',
#                 'post_title',
#                 'photo_url',
#                 'place',
#                 'category',
#                 'tags'
#                 )
#       extra_kwargs = {'tags': {'required': True}}

    
      
      
class CommentSerializer2(serializers.ModelSerializer):
  class Meta:
    model = Comment
    fields = ('id',
              'comment_txt',
              'comment_date',
              'post',              
              )


# user_id  = je comment korse 
class CommentSerializer3(serializers.ModelSerializer):


  class Meta:

    model = Comment
    fields = ('id',
              'comment_txt',
              'comment_date',
              'post',
              'user'
              )
