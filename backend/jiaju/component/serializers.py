from rest_framework import serializers
from .models import View, Component, ComponentLineItem


class ComponentLineItemSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()

    class Meta:
        model = ComponentLineItem
        fields = ("image_url", "short_description", "description")

    def get_image_url(self, obj):
        request = self.context.get('request')
        return request.build_absolute_uri(obj.image.url)


class ComponentSerializer(serializers.ModelSerializer):
    line_items = ComponentLineItemSerializer(many=True, read_only=True)

    class Meta:
        model = Component
        fields = ("line_items", )


class ViewSerializer(serializers.ModelSerializer):
    components = serializers.SerializerMethodField()

    class Meta:
        model = View
        fields = ("components", )

    def get_components(self, obj):
        return {
            component.name: ComponentSerializer(component, context=self.context).data
            for component in obj.components.all()
        }
