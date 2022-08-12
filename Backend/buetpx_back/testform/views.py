from unicodedata import category
from django.shortcuts import render
from django.http.response import JsonResponse
# from Backend.buetpx_back.buetpx.models import Place
from rest_framework.parsers import JSONParser 
from rest_framework import status
from rest_framework.decorators import api_view
from testform.serializers import PostInsertSerializer

from testform.image_tag.tag_generate import tag_generate
    
# json field server accept 
@api_view(['POST'])
def insert_post(request):
   
    if request.method == 'POST':
        
        post_data = JSONParser().parse(request)
        post_insert_serializer = PostInsertSerializer(data=post_data)

        if post_insert_serializer.is_valid():
                post_insert_serializer.save()
                return JsonResponse(post_insert_serializer.data, status=status.HTTP_201_CREATED) 
        return JsonResponse(post_insert_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def tag_suggest(request):
   
    if request.method == 'POST':
        
        post_data = JSONParser().parse(request)
        photo_url = post_data.get('photo_url')
        print("photo_url: ", photo_url)

        tags = tag_generate(photo_url)
        print("tags:", tags)         
        response_data = {}
        response_data['tags'] = tags

        return JsonResponse(response_data, safe=False)


@api_view(['Get'])
def tag_suggest2(request): 
    
    if request.method == 'GET':       
        url = "https://geographical.co.uk/wp-content/uploads/somalaya-mountain-range-title.jpg"
        tags = tag_generate(url)
        print("tags:", tags)         
        response_data = {}
        response_data['tags'] = tags

        return JsonResponse(response_data, safe=False)
    
    

@api_view(['Get'])
def my_tag(request): 
    
    if request.method == 'GET':       
        
        response_data = {}
        response_data['tags'] = "mountain"
        return JsonResponse(response_data, safe=False)