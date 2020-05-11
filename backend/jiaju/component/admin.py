from django.contrib import admin
from nested_admin.forms import SortableHiddenMixin
from nested_admin.nested import NestedTabularInline, NestedModelAdmin
from .models import View, Component, ComponentLineItem


class ComponentLineItemAdmin(SortableHiddenMixin, NestedTabularInline):
    model = ComponentLineItem
    sortable_field_name = 'ordering'
    extra = 1


class ComponentAdmin(NestedModelAdmin):
    inlines = [ComponentLineItemAdmin, ]
    list_display = ('name', 'description', )
    # readonly_fields = ('view', 'name', )

    def get_readonly_fields(self, request, obj=None):
        if obj:  # editing an existing object
            return self.readonly_fields + ('view', 'name', )
        return self.readonly_fields


class ViewAdmin(admin.ModelAdmin):
    model = View


admin.site.register(View, ViewAdmin)
admin.site.register(Component, ComponentAdmin)
