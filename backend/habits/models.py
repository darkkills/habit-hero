from django.db import models
FREQUENCY_CHOICES=[('daily','Daily'),('weekly','Weekly')]
CATEGORY_CHOICES=[('health','Health'),('work','Work'),('learning','Learning')]
class Habit(models.Model):
    name=models.CharField(max_length=100)
    frequency=models.CharField(max_length=10,choices=FREQUENCY_CHOICES)
    category=models.CharField(max_length=20,choices=CATEGORY_CHOICES)
    start_date=models.DateField()
class HabitCheckin(models.Model):
    habit=models.ForeignKey(Habit,on_delete=models.CASCADE,related_name='checkins')
    date=models.DateField()
    note=models.TextField(blank=True,null=True)
    mood=models.CharField(max_length=10,blank=True)
