from django.urls import path
from quest import views 
 
urlpatterns = [ 
    path('api/insert_quest',views.insert_quest),
    # path ('api/insert_submission', views.insert_submission),
]