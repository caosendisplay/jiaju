from django.shortcuts import get_object_or_404
from rest_framework import mixins
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.permissions import AllowAny

from .models import Category, Product, ProductPicture
from .serializers import CategorySerializer, ProductSerializer, ProductDetailedSerializer,FeaturedCategorySerializer


class CategoryView(mixins.ListModelMixin, mixins.RetrieveModelMixin, viewsets.GenericViewSet):
    permission_classes = (AllowAny, )
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())

        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)


class ProductView(mixins.ListModelMixin, viewsets.GenericViewSet):
    permission_classes = (AllowAny, )
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    def get_queryset(self):
        queryset = self.queryset
        category_id = self.kwargs.get('category', None)
        if category_id is not None:
            queryset = queryset.filter(category=category_id)
        return queryset


class ProductDetailedView(mixins.RetrieveModelMixin, viewsets.GenericViewSet):
    permission_classes = (AllowAny, )
    queryset = Product.objects.all()
    serializer_class = ProductDetailedSerializer


class FeaturedProductView(mixins.ListModelMixin, viewsets.GenericViewSet):
    permission_classes = (AllowAny, )
    queryset = Category.objects.all()
    serializer_class = FeaturedCategorySerializer

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())

        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)
