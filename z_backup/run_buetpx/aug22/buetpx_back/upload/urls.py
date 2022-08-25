from django.urls import path
from upload import views 
 
urlpatterns = [ 

    path ('api/upload/photo', views.photo_upload),
    path ('api/upload/tags', views.get_photo_tags),

   
]