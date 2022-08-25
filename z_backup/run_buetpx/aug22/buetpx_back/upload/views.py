from unicodedata import category
from django.shortcuts import render
from django.http.response import JsonResponse
# from Backend.buetpx_back.buetpx.models import Place
from rest_framework.parsers import JSONParser 
from rest_framework import status
from rest_framework.decorators import api_view
from buetpx.models import Post

from buetpx.serializers import PostSerializer2,PostUpSerializer,TagsSerializer

# Create your views here.

@api_view(['POST'])
def photo_upload(request):
    
    # request body should be
    # {
        # 'post_title': 'title',
        # post_date
        # 'photo_url': 'description',
        # 'owner': 'id',
        # 'category': 'id',
        # 'place': 'id',
        # 'tags': ['tag1', 'tag2', 'tag3']

    post_data = JSONParser().parse(request)
    


    print("*******************This is post_data*********************")
    print(post_data)

    tags = post_data['tags']
    tag_ids = []
    # Post has many tags
    # add tags to post
    for tag in tags:
        tag_serializer = TagsSerializer(data={'name': tag})
        if tag_serializer.is_valid():
            tag_serializer.save()
            tag_ids.append(tag_serializer.data['id'])


        else:
            print("*******************This is tag_serializer*********************")
            print(tag_serializer.errors)
            # return JsonResponse(tag_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # add tags to post data
    post_data['tags'] = tag_ids
    print("*******************After adding tag ids This is post_data*********************")
    print(post_data)

    post_serializer = PostUpSerializer(data=post_data)
    print("*******************This is post_serializer*********************")
    print(post_serializer.is_valid())
    
    
    if post_serializer.is_valid():
        post_serializer.save()
        pid = post_serializer.data['id']

        
        
        # now update the post with the tags field of the post_serializer
        # post_serializer.data['tags'] = tag_ids
        # post_serializer.save()

        

        return JsonResponse(post_serializer.data, status=status.HTTP_201_CREATED) 
    
    else:
        print(post_serializer.errors)

    
    return JsonResponse(post_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET','POST'])
def get_photo_tags(request):

    data = JSONParser().parse(request)

    # some dummy tags to be ret urned
    print("*******************This is data*********************")
    print(data,end="\n")
    tags = ['shadow', 'dark', 'lake']
    return JsonResponse(tags, safe=False)

