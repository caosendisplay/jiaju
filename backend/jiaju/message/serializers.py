from rest_framework import serializers
from .models import Message
from ..users.models import User


class MessageCreateSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    phone = serializers.CharField(required=True, allow_blank=False, max_length=20, write_only=True)
    name = serializers.CharField(required=True, allow_blank=False, max_length=20, write_only=True)
    body = serializers.CharField(allow_blank=True)

    class Meta:
        model = Message
        fields = ('id', 'phone', 'name', 'body')

    def create(self, validated_data):
        phone = validated_data.pop('phone')
        name = validated_data.pop('name')

        try:
            user = User.objects.get(phone=phone)
        except User.DoesNotExist:
            user = User.objects.create(phone=phone, last_name=name)
        return Message.objects.create(user=user, **validated_data)
