from django.urls import path
from gallery import views 

urlpatterns = [ 
    path ('api/galleries/<uid>', views.get_galleries_by_uid),
     path ('api/gallery/<id>', views.get_gallery_posts_by_id),
]