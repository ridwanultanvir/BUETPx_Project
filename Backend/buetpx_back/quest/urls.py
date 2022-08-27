from django.urls import path
from quest import views 
 
urlpatterns = [ 
    path('api/insert_quest',views.insert_quest),
    path('api/quest_by_id/<id>',views.quest_by_id),
    path ('api/insert_submission', views.insert_submission),
    # insert_submission = submitPhoto
    path ('api/get_posts_by_userid/<id>', views.get_posts_by_userid),
    path ('api/get_posts_all_data', views.get_posts_all_data),
    path ('api/get_active_quests', views.get_active_quests),
    path ('api/get_all_quests', views.get_all_quests),
    path ('api/update_quest_status/<id>', views.update_quest_status),
    path ('api/get_ended_quests', views.get_ended_quests),
    path ('api/get_submission_by_questid/<id>', views.get_submission_by_questid),

    
    
]