from rest_framework import serializers 
from buetpx.models import Tutorial
from buetpx.models import Post

 
 
class TutorialSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = Tutorial
        fields = ('id',
                  'title',
                  'description',
                  'published')

class PostSerializer(serializers.ModelSerializer):
    posted_by = serializers.ReadOnlyField(source='owner.id')
    category_name = serializers.ReadOnlyField(source='category.name')
    place_name = serializers.ReadOnlyField(source='place.name')
    tags_name = serializers.ReadOnlyField(source='tags.name')
    
    class Meta:
        model = Post
        fields = (
                  'id',
                  'post_date',
                  'photo_url',
                  'posted_by',
                  'category_name',
                    'place_name',
                    'tags_name'

                  )