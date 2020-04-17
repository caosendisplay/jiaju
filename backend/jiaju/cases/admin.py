from django.contrib import admin
from .models import Category, Case, CasePicture


class CasePictureAdmin(admin.TabularInline):
    model = CasePicture


class CaseAdmin(admin.ModelAdmin):
    inlines = [CasePictureAdmin, ]


class CategoryAdmin(admin.ModelAdmin):
    model = Category


admin.site.register(Case, CaseAdmin)
admin.site.register(Category, CategoryAdmin)
admin.site.register(CasePicture)
