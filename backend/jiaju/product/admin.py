from django.contrib import admin
from .models import Category, Product, ProductPicture, ProductDetailedDescription
from nested_admin.nested import NestedTabularInline
from nested_admin.polymorphic import NestedStackedPolymorphicInline, NestedPolymorphicModelAdmin
from ..common.models import Article
from ..common.admin import ArticleAdmin, SectionInlineAdmin


class ProductPictureAdmin(admin.ModelAdmin):
    model = ProductPicture
    list_display = ('product', 'description', 'featured', 'cover', 'image_tag')
    readonly_fields = ['image_tag']
    ordering = ('-product__category', '-product', '-update_at', '-create_at')


class CategoryAdmin(admin.ModelAdmin):
    model = Category


class ProductPictureInlineAdmin(NestedTabularInline):
    model = ProductPicture


class ProductDetailedDescriptionAdminInline(NestedTabularInline):
    model = ProductDetailedDescription


class ProductAdmin(NestedPolymorphicModelAdmin):
    inlines = [ProductPictureInlineAdmin, ProductDetailedDescriptionAdminInline]


admin.site.register(Product, ProductAdmin)
admin.site.register(Category, CategoryAdmin)
admin.site.register(ProductPicture, ProductPictureAdmin)
