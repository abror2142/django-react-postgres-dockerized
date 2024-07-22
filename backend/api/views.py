from rest_framework import viewsets

from .serializers import StudentSerializer
from school.models import Student


class StudentAPIView(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer