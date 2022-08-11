from django.shortcuts import render
from django.http.response import JsonResponse
from signup_login.serializers import SignupSerializer
from rest_framework.parsers import JSONParser 
from rest_framework import status
from rest_framework.decorators import api_view
import json
# Create your views here.

@api_view(['GET', 'POST'])
def signup(request):
    if request.method == 'POST':
        
        signup_info = JSONParser().parse(request)
        signup_info_serializer = SignupSerializer(data=signup_info)
        print(signup_info)

        if signup_info_serializer.is_valid():
                signup_info_serializer.save()
                return JsonResponse(signup_info_serializer.data, status=status.HTTP_201_CREATED) 
        return JsonResponse(signup_info_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
