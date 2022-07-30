# from django.conf.urls import re_path  
from django.urls import path
from discover import views 
 
urlpatterns = [ 

    path ('discover/categories', views.get_categories),
    path ('discover/categories/posts/<id>', views.get_post_by_categoryid),
    # http://127.0.0.1:8000/api/categories/posts/list/1,2,3
    path ('discover/posts_by_catlist/<list>', views.get_post_by_categories),
    # path ('discover/categories/<name>/posts', views.get_post_by_categoryname),
	path ('discover/posts_by_cat/<catname>', views.post_list_by_catname),
	path ('discover/newest_posts/', views.get_newest_posts),
    path ('discover/search/<list>', views.get_search_result),


    
]