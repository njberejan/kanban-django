from rest_framework import serializers
from .models import Task
from django.contrib.auth.models import User


class TaskSerializer(serializers.HyperlinkedModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = Task
        fields = ('owner', 'url', 'id', 'title', 'status', 'priority', 'time_modified')

class UserSerializer(serializers.HyperlinkedModelSerializer):
    tasks = serializers.HyperlinkedRelatedField(many=True, view_name='task-detail', read_only=True)

    class Meta:
        model = User
        fields = ('id', 'username', 'tasks')
