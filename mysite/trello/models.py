from django.db import models
from django.utils import timezone

# Create your models here.
class Task(models.Model):
    id = models.IntegerField(primary_key=True)
    title = models.CharField(max_length=100)
    status = models.CharField(max_length=100)
    priority = models.CharField(max_length=100)
    time_modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title
