from django.urls import path
from testform import views 
 
urlpatterns = [ 
    path('api/insert_post',views.insert_post),
    path('api/tag_suggest',views.tag_suggest),
    path('api/tag_suggest2',views.tag_suggest2),
    path('api/my_tag',views.my_tag),
]