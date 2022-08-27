from dataclasses import fields
import imp
from rest_framework import serializers 
from buetpx.models import UserAccount
# from signup_login.models import MyUser
from django.contrib.auth.models import User
from rest_framework.response import Response
from rest_framework import status
from rest_framework.validators import UniqueValidator
from django.contrib.auth.password_validation import validate_password


class SignupSerializer(serializers.ModelSerializer):
  # posts = PostSerializer(many=True, read_only=True)

  class Meta:
    # ordering = ['-id']
    model = UserAccount
    fields = ('id',
              'name',
              'email',
              'hashedpass',
              'photo_url'
              )

class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model=User
    fields=[
        'id',
        'username',
        'email',
        'password',
        'photo_url'
    ]
        
class UserSerializer2(serializers.ModelSerializer): 
  class Meta:
    model = User
    fields = ["id", "first_name", "last_name", "email"]
    
class RegisterSerializer(serializers.ModelSerializer):
  email = serializers.EmailField(
    required=True,
    validators=[UniqueValidator(queryset=User.objects.all())]
  )
  password = serializers.CharField(
    write_only=True, required=True, validators=[validate_password])
  
  password2 = serializers.CharField(write_only=True, required=True)
  
  class Meta:
    model = User
    # fields = ('username', 'password', 'password2',
    #      'email', 'photo_url','first_name','last_name')
    fields = ('username', 'password', 'password2',
      'email', 'first_name','last_name')
    extra_kwargs = {
      'first_name': {'required': True},
      'last_name': {'required': True}
    }
    
  def validate(self, attrs):
    print("validate reached")
    if attrs['password'] != attrs['password2']:
      raise serializers.ValidationError(
        {"password": "Password fields didn't match."})
    
    return attrs
  
  def create(self, validated_data):
    print("create reached")
    user = User.objects.create(
      username=validated_data['username'],
      email=validated_data['email'],
      # photo_url=validated_data['photo_url'],
      first_name=validated_data['first_name'],
      last_name=validated_data['last_name']
    )
    user.set_password(validated_data['password'])
    user.save()
    # useraccount=UserAccount.objects.create(
    #   email=validated_data['email'],
    #   username=validated_data['first_name']+" "+validated_data['last_name'],
    #   hashed_pass=user.password
    # )
    # # useraccount.set_password(validated_data['password'])
    # useraccount.save()
    return user   
       
# class UserSerializer(serializers.ModelSerializer):
#     user_id=DjangoUserSerializer(required=True)
#     print('id',user_id)
#     class Meta:

#     # ordering = ['-id']
#         model = User
#         fields = ('id',
#                 'photo_url',
#                 'user_id'
#                 )
#     def create(self, validated_data):
#         """
#         Make necessary modifications as per your requirements
#         """
#         person_profile = DjangoUserSerializer.create(DjangoUserSerializer(), validated_data)
#         person, created = User.objects.create(profile=person_profile)
#         return person