from django.db import models

from buetpx.models import Post, UserAccount, Category

# Create your models here.
class Quest(models.Model):
    # id : django automatic ney 
    quest_title = models.CharField(max_length=500)
    quest_theme = models.CharField(max_length=500)
    quest_description = models.TextField()
    start_date = models.DateTimeField(auto_now_add=True)
    end_date = models.DateTimeField(auto_now_add=True)
    photo_url = models.CharField(max_length=500)
    category = models.CharField(max_length=500)
    # status: 'Active', 'Inactive', 'Completed'
    status =  models.CharField(max_length=500)
    
    reward = models.CharField(max_length=500)
    # 0 = inactive; 1 = active; 2 = completed

    
    # NOPE ; NO FK required
    # category = models.ForeignKey(
    #       Category, 
    #       on_delete=models.CASCADE,
    #       related_name='quest'
    # )
    
    def __str__(self):
        return self.quest_title
    

class Submission(models.Model):
    # submission_id = models.IntegerField()
    quest_id = models.ForeignKey(
          Category, 
          on_delete=models.CASCADE,
          related_name='submission'
    )
    post_id = models.ForeignKey(
            Post, 
            on_delete=models.CASCADE,
            related_name='submission'
    )