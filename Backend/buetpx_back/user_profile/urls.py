from django.urls import path
from user_profile import views 
 
urlpatterns = [ 

    path ('api/posts_by_uid/<uid>', views.posts_by_uid),
    path ('api/user_profile_details/<uid>', views.get_user_details),
   
]