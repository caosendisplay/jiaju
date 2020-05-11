from rest_framework import mixins
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.permissions import AllowAny

from .models import Message
from .serializers import MessageCreateSerializer


class MessageView(mixins.CreateModelMixin, viewsets.GenericViewSet):
    permission_classes = (AllowAny, )
    queryset = Message.objects.all()
    serializer_class = MessageCreateSerializer

