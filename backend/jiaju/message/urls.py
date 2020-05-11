from django.urls import re_path, include
from rest_framework.routers import DefaultRouter

from .views import MessageView

router = DefaultRouter()
router.register(r'', MessageView)

urlpatterns = [
    re_path(r'', include(router.urls)),
]