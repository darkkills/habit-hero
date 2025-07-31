from rest_framework import serializers
from .models import Habit,HabitCheckin
class HabitCheckinSerializer(serializers.ModelSerializer):
    class Meta: model=HabitCheckin; fields='__all__'
class HabitSerializer(serializers.ModelSerializer):
    checkins=HabitCheckinSerializer(many=True,read_only=True)
    class Meta: model=Habit; fields='__all__'
