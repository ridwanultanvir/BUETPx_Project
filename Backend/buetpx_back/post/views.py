from unicodedata import category
from django.shortcuts import render
from django.http.response import JsonResponse
# from Backend.buetpx_back.buetpx.models import Place
from rest_framework.parsers import JSONParser 
from rest_framework import status
from rest_framework.decorators import api_view
    
    
@api_view(['GET','Post'])
def upload(request):
    
    if request.method == 'POST':
        print("Got data")
        
        
        return JsonResponse()
        # need to write correspoding data manipulation to add the photo to a post
