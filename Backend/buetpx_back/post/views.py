from unicodedata import category
from django.shortcuts import render
from django.http.response import JsonResponse
from buetpx.serializers import PlaceSerializer
# from Backend.buetpx_back.buetpx.models import Place
from rest_framework.parsers import JSONParser 
from rest_framework import status
from rest_framework.decorators import api_view
from buetpx.models import Place
    
    
@api_view(['GET','Post'])
def upload(request):
    
    if request.method == 'POST':
        print("Got data")
        
        
        return JsonResponse()
        # need to write correspoding data manipulation to add the photo to a post
        
@api_view(['GET','Post'])
def places(request):
    
    if request.method == 'GET':
        places=Place.objects.all()
        place_serializer = PlaceSerializer(places, many=True)
        return JsonResponse(place_serializer.data, safe=False)
        
       
