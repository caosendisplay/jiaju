from django.shortcuts import get_object_or_404
from rest_framework import mixins
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.permissions import AllowAny

from .models import Category, Case, CasePicture
from .serializers import CategorySerializer, CaseSerializer, FeaturedCategorySerializer


class CategoryView(mixins.ListModelMixin, mixins.RetrieveModelMixin, viewsets.GenericViewSet):
    permission_classes = (AllowAny, )
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())

        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)


class CaseView(mixins.RetrieveModelMixin, viewsets.GenericViewSet):
    permission_classes = (AllowAny, )
    queryset = Case.objects.all()
    serializer_class = CaseSerializer


class FeaturedCaseView(mixins.ListModelMixin, viewsets.GenericViewSet):
    permission_classes = (AllowAny, )
    queryset = Category.objects.all()
    serializer_class = FeaturedCategorySerializer

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())

        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)
