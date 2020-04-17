from django.urls import path, re_path, include
from rest_framework.routers import DefaultRouter

from jiaju.cases.views import CategoryView, CaseView, FeaturedCaseView

router = DefaultRouter()
router.register(r'category', CategoryView)
router.register(r'', CaseView)

urlpatterns = [
    re_path(r'featured/$', FeaturedCaseView.as_view({'get': 'list'})),
    re_path(r'', include(router.urls)),
]