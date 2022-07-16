# from django.conf.urls import re_path  
from django.urls import path
from buetpx import views 
 
urlpatterns = [ 
    path ('api/categories', views.get_categories),
    path ('api/posts', views.post_list),
    path ('api/posts/<id>', views.get_post_by_id),
    path ('api/comments/<postid>', views.get_comments_by_postid),
    # path ('api/tags/<postid>', views.get_tags_by_postid),
    path ('api/users', views.get_all_user),
    path ('api/user/<id>', views.get_user_by_id),
]