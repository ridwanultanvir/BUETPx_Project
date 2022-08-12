from dataclasses import fields
from rest_framework import serializers 
from buetpx.models import UserAccount
from signup_login.models import MyUser
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
              'photo_url',
              'hashedpass'
              )

class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model=MyUser
    fields=[
        'id',
        'username',
        'email',
        'password',
        'photo_url'
    ]
        
class UserSerializer2(serializers.ModelSerializer): 
  class Meta:
    model = MyUser
    fields = ["id", "first_name", "last_name", "email"]
    
class RegisterSerializer(serializers.ModelSerializer):
  email = serializers.EmailField(
    required=True,
    validators=[UniqueValidator(queryset=MyUser.objects.all())]
  )
  password = serializers.CharField(
    write_only=True, required=True, validators=[validate_password])
  
  password2 = serializers.CharField(write_only=True, required=True)
  
  class Meta:
    model = MyUser
    fields = ('username', 'password', 'password2',
         'email', 'photo_url','first_name','last_name')
    extra_kwargs = {
      'first_name': {'required': True},
      'last_name': {'required': True}
    }
    
  def validate(self, attrs):
    if attrs['password'] != attrs['password2']:
      raise serializers.ValidationError(
        {"password": "Password fields didn't match."})
    return attrs
  
  def create(self, validated_data):
    user = MyUser.objects.create(
      username=validated_data['username'],
      email=validated_data['email'],
      photo_url=validated_data['photo_url'],
      # first_name=validated_data['first_name'],
      # last_name=validated_data['last_name']
    )
    user.set_password(validated_data['password'])
    user.save()
    return user   
       
# class MyUserSerializer(serializers.ModelSerializer):
#     user_id=DjangoUserSerializer(required=True)
#     print('id',user_id)
#     class Meta:

#     # ordering = ['-id']
#         model = MyUser
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