from django.shortcuts import get_object_or_404
from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from rest_framework import mixins
from .models import View, Component
from .serializers import ComponentSerializer, ViewSerializer


class ComponentViewSet(mixins.RetrieveModelMixin, viewsets.GenericViewSet):
    permission_classes = (AllowAny, )
    queryset = Component.objects.all()
    serializer_class = ComponentSerializer

    def get_object(self):
        queryset = self.filter_queryset(self.get_queryset())
        view = self.kwargs.pop('view')
        name = self.kwargs.pop('name')
        return get_object_or_404(queryset, view__name=view, name=name)


class ViewViewSet(mixins.RetrieveModelMixin, viewsets.GenericViewSet):
    permission_classes = (AllowAny, )
    queryset = View.objects.all()
    serializer_class = ViewSerializer
    lookup_field = 'name'
