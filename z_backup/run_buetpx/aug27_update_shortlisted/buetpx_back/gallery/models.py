from django.db import models
from buetpx.models import UserAccount
from buetpx.models import Post

class Gallery(models.Model):
    title= models.CharField(max_length=200)
    owner=models.ForeignKey(
        UserAccount,
        on_delete=models.CASCADE,
        related_name='gallery'
    )
    posts = models.ManyToManyField(
        Post,
        blank=True,
        related_name='gallery'
    )
