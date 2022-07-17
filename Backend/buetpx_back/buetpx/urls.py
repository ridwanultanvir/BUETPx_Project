# from django.conf.urls import re_path  
from django.urls import path
from buetpx import views 
 
urlpatterns = [ 
    path ('api/categories', views.get_categories),
    path ('api/categories/posts/<id>', views.get_post_by_categoryid),
    # http://127.0.0.1:8000/api/categories/posts/list/1,2,3
    path ('api/categories/posts/list/<list>', views.get_post_by_categorylist),
    # path ('api/categories/<name>/posts', views.get_post_by_categoryname),
    path ('api/posts', views.post_list),
	
	path ('api/posts_by_cat/<catname>', views.post_list_by_catname),

    path ('api/posts/<id>', views.get_post_by_id),
    path ('api/post_detail', views.post_detail),
    path ('api/posts/<catname>', views.post_list_by_catname),

    path ('ai/posts/<postid>/comments', views.get_comments_by_postid),
    path ('api/comments/<postid>', views.get_comments_by_postid),
    # path ('api/tags/<postid>', views.get_tags_by_postid),

    # path ('api/comments/<id>', views.get_comment_by_id),
    # path ('api/comments_post/<id>', views.get_comment_by_post_id),

    path ('api/users', views.get_all_user),
    path ('api/user/<id>', views.get_user_by_id),
]