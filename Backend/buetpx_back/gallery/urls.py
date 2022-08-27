from django.urls import path
from gallery import views 

urlpatterns = [ 
    path ('api/galleries/<uid>', views.get_galleries_by_uid),
    path ('api/galleries/<uid>/<pid>', views.get_galleries_by_uid_pid),
    path ('api/galleries/', views.get_galleries),
    path ('api/gallery/<id>', views.get_gallery_posts_by_id),
    path('api/add_gallery', views.add_gallery),
    path('api/add_remove_post_to_gallery', views.add_remove_post_to_gallery),
    path('api/remove_post_from_gallery', views.remove_post_from_gallery),
    
]