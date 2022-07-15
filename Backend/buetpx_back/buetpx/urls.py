# from django.conf.urls import re_path  
from django.urls import path
from buetpx import views 
 
urlpatterns = [ 
    path ('api/tutorials', views.tutorial_list),
    path ('api/categories', views.get_categories),
    path ('api/posts', views.post_list),
    path ('api/users', views.get_all_user),
    path ('api/user/<id>', views.get_user_by_id),
    path ('api/tutorials/published', views.tutorial_list_published),
    path ('api/tutorials/<pk>', views.tutorial_detail),
    # path ('api/posts/<pk>', views.tutorial_detail),
]