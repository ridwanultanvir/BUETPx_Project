from django.urls import path
from signup_login import views
 
urlpatterns = [ 
        path ('api/signup', views.signup),
]