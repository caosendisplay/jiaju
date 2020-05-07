from django.urls import path, re_path, include
from rest_framework.routers import DefaultRouter

from jiaju.cases.views import CategoryView, CaseView, CaseDetailedView, FeaturedCaseView

router = DefaultRouter()
router.register(r'category', CategoryView)
router.register(r'(?P<category>[0-9]+)', CaseView)
router.register(r'detail', CaseDetailedView)

urlpatterns = [
    re_path(r'featured/$', FeaturedCaseView.as_view({'get': 'list'})),
    re_path(r'', include(router.urls)),
]