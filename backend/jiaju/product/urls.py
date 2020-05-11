from django.urls import path, re_path, include
from rest_framework.routers import DefaultRouter

from .views import CategoryView, ProductView, ProductDetailedView, FeaturedProductView

router = DefaultRouter()
router.register(r'category', CategoryView)
router.register(r'(?P<category>[0-9]+)', ProductView)
router.register(r'detail', ProductDetailedView)

urlpatterns = [
    re_path(r'featured/$', FeaturedProductView.as_view({'get': 'list'})),
    re_path(r'', include(router.urls)),
]