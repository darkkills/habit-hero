from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import HabitViewSet,HabitCheckinViewSet
router=DefaultRouter()
router.register('habits',HabitViewSet)
router.register('checkins',HabitCheckinViewSet)
urlpatterns=[path('',include(router.urls))]
