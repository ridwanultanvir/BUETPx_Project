from turtle import position
from django.shortcuts import render
from buetpx.serializers import PostSerializer,PostSerializer2
from rest_framework.parsers import JSONParser 
from rest_framework import status
from rest_framework.decorators import api_view
from django.http.response import JsonResponse
from gallery.models import Gallery
from gallery.serializers import GallerySerializer,GalleryPostSerializer
from buetpx.models import Post
from unicodedata import category

# get user by id
@api_view(['GET'])
def get_galleries_by_uid(request,uid):
    if request.method == 'GET':
        print(uid)
        galleries = Gallery.objects.filter(owner_id=uid)
        galleries_serializer = GallerySerializer(galleries,many = True)
        print(galleries_serializer.data)
        return JsonResponse(galleries_serializer.data, safe=False)

@api_view(['GET'])
def get_gallery_posts_by_id(request,id):
    if request.method == 'GET':
        post_detail_list=[]
        gallery = Gallery.objects.get(pk=id)
        print('#############gallery####################',gallery)
        gallery_serializer = GalleryPostSerializer(gallery)
        post_id_list=list(gallery_serializer.data['posts'])
        for pid in post_id_list:
            post=Post.objects.get(pk=pid)
            print('post',post)
            
            postserializer=PostSerializer(post)
            print('post data')
            print(postserializer.data)
            
            post_detail_list.append(postserializer.data)
            print('-------p id------',pid)
        
        return JsonResponse(post_detail_list, safe=False)