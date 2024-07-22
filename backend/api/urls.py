from django.urls import path, include
from rest_framework import routers

from .views import StudentAPIView


router = routers.SimpleRouter()
router.register('student', StudentAPIView)


urlpatterns = [
    path('', include(router.urls)),
]
