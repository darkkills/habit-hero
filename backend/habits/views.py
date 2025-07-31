from rest_framework import viewsets
from .models import Habit,HabitCheckin
from .serializers import HabitSerializer,HabitCheckinSerializer
class HabitViewSet(viewsets.ModelViewSet):
    queryset=Habit.objects.all(); serializer_class=HabitSerializer
class HabitCheckinViewSet(viewsets.ModelViewSet):
    queryset=HabitCheckin.objects.all(); serializer_class=HabitCheckinSerializer
