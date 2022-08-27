from django.urls import path
from signup_login import views
from .views import UserDetailAPI,RegisterUserAPIView
 
urlpatterns = [ 
        path ('api/signup', views.signup),
        path("api/getuserdetails",UserDetailAPI.as_view()),
        path('api/register',RegisterUserAPIView.as_view()),
        
]