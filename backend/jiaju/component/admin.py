from django.contrib import admin
from .models import View, Component, ComponentLineItem


class ComponentLineItemAdmin(admin.TabularInline):
    model = ComponentLineItem


class ComponentAdmin(admin.ModelAdmin):
    inlines = [ComponentLineItemAdmin, ]


class ViewAdmin(admin.ModelAdmin):
    model = View


admin.site.register(View, ViewAdmin)
admin.site.register(Component, ComponentAdmin)
