from django.contrib import admin
from .models import Category, Case, CasePicture


class CasePictureAdmin(admin.ModelAdmin):
    model = CasePicture
    list_display = ('case', 'description', 'featured', 'cover', 'image_tag')
    readonly_fields = ['image_tag']
    ordering = ('-case__category', '-case', '-update_at', '-create_at')


class CasePictureInlineAdmin(admin.TabularInline):
    model = CasePicture


class CaseAdmin(admin.ModelAdmin):
    inlines = [CasePictureInlineAdmin, ]


class CategoryAdmin(admin.ModelAdmin):
    model = Category


admin.site.register(Case, CaseAdmin)
admin.site.register(Category, CategoryAdmin)
admin.site.register(CasePicture, CasePictureAdmin)
