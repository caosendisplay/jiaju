from django.contrib import admin
from .models import Category, Case, CasePicture, CaseDetailedDescription
from nested_admin.nested import NestedTabularInline
from nested_admin.polymorphic import NestedStackedPolymorphicInline, NestedPolymorphicModelAdmin
from ..common.models import Article
from ..common.admin import ArticleAdmin, SectionInlineAdmin


class CasePictureAdmin(admin.ModelAdmin):
    model = CasePicture
    list_display = ('case', 'description', 'featured', 'cover', 'image_tag')
    readonly_fields = ['image_tag']
    ordering = ('-case__category', '-case', '-update_at', '-create_at')


class CategoryAdmin(admin.ModelAdmin):
    model = Category


class CasePictureInlineAdmin(NestedTabularInline):
    model = CasePicture


class CaseDetailedDescriptionAdminInline(NestedTabularInline):
    model = CaseDetailedDescription


class CaseAdmin(NestedPolymorphicModelAdmin):
    inlines = [CasePictureInlineAdmin, CaseDetailedDescriptionAdminInline]


admin.site.register(Case, CaseAdmin)
admin.site.register(Category, CategoryAdmin)
admin.site.register(CasePicture, CasePictureAdmin)
