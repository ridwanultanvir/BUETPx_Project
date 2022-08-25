import this
from django.db import models
from django.contrib.auth.models import User,AbstractUser

User._meta.get_field('email')._unique = True
User._meta.get_field('email').blank = False
User._meta.get_field('email').null = False

# class MyUser(User):
#     photo_url = models.CharField(max_length=200)
