from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from rest_framework import mixins
from rest_framework.response import Response
from rest_framework.settings import api_settings


class ConfigViewSet(mixins.RetrieveModelMixin, viewsets.GenericViewSet):
    permission_classes = (AllowAny, )

    def retrieve(self, request, *args, **kwargs):
        result = {
            'page_size': api_settings.PAGE_SIZE
        }
        return Response(result)

