from django.db import models

from buetpx.models import Post, UserAccount, Category

# Create your models here.
class Quest(models.Model):
    # id : django automatic ney 
    title = models.CharField(max_length=500)
    theme = models.CharField(max_length=500)
    description = models.TextField()
    startDate = models.DateTimeField()
    # end_date = models.DateTimeField(auto_now_add=True)
    endDate = models.DateTimeField()
    photoUrl = models.CharField(max_length=500)
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
        return self.title
    

class Submission(models.Model):
    # submission_id = models.IntegerField()
    # quest_id eta ; DB e automatic "id" jog kore fele 
    quest = models.ForeignKey(
          Category, 
          on_delete=models.CASCADE,
          related_name='submission'
    )
    post = models.ForeignKey(
            Post, 
            on_delete=models.CASCADE,
            related_name='submission'
    )
    shortlisted = models.IntegerField()
    # 0 = not shortlisted; 1 = shortlisted
