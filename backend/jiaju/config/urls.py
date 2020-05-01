from django.urls import re_path
from .views import ConfigViewSet


urlpatterns = [
    re_path(r'', ConfigViewSet.as_view({'get': 'retrieve'})),
]