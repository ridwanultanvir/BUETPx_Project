from django.shortcuts import render
from django.http.response import JsonResponse
# from signup_login.models import MyUser
from django.contrib.auth.models import User
from signup_login.serializers import UserSerializer
from rest_framework.parsers import JSONParser 
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import UserSerializer2,RegisterSerializer
from rest_framework.authentication import TokenAuthentication
from rest_framework import generics
# import json
# import hashlib
# import os
# Create your views here.

@api_view(['GET', 'POST'])
def signup(request):
    # pass
    if request.method == 'POST':
        
        user_info = JSONParser().parse(request)
        user_info_serializer = UserSerializer(data=user_info)
        print(user_info)

        if user_info_serializer.is_valid():
                user_info_serializer.save()
                return JsonResponse(user_info_serializer.data, status=status.HTTP_201_CREATED) 
        return JsonResponse(user_info_serializer.errors, status=status.HTTP_400_BAD_REQUEST)



# Class based view to Get User Details using Token Authentication
class UserDetailAPI(APIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (AllowAny,)
    def get(self,request,*args,**kwargs):
        print(request)
        user = User.objects.get(id=request.user.id)
        serializer = UserSerializer2(user)
        return Response(serializer.data)
      
    

#Class based view to register user
class RegisterUserAPIView(generics.CreateAPIView):
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer
