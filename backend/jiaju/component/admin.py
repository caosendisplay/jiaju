from django.contrib import admin
from .models import View, Component, ComponentLineItem


class ComponentLineItemAdmin(admin.TabularInline):
    model = ComponentLineItem
    extra = 1


class ComponentAdmin(admin.ModelAdmin):
    inlines = [ComponentLineItemAdmin, ]
    list_display = ('name', 'description', )
    # readonly_fields = ('view', 'name', )

    def get_readonly_fields(self, request, obj=None):
        if obj:  # editing an existing object
            return self.readonly_fields + ('view', 'name', )
        return self.readonly_fields


admin.site.register(Component, ComponentAdmin)
