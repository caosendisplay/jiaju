from django.contrib import admin
from .models import Message


class MessageAdmin(admin.ModelAdmin):
    list_display = ('user', 'body', 'create_at')


admin.site.register(Message, MessageAdmin)
