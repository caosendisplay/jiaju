import nested_admin
from django.contrib import admin
from nested_admin.forms import SortableHiddenMixin
from nested_admin.nested import NestedTabularInline
from nested_admin.polymorphic import NestedStackedPolymorphicInline, NestedPolymorphicModelAdmin
from .models import Article, Section, Content, H1, H2, H3, Info, Picture, Paragraph


class ContentInline(NestedStackedPolymorphicInline):
    model = Content
    class H1Inline(SortableHiddenMixin, NestedStackedPolymorphicInline.Child):
        model = H1
        sortable_field_name = 'ordering'
    class H2Inline(SortableHiddenMixin, NestedStackedPolymorphicInline.Child):
        model = H2
        sortable_field_name = 'ordering'
    class H3Inline(SortableHiddenMixin, NestedStackedPolymorphicInline.Child):
        model = H3
        sortable_field_name = 'ordering'
    class ParagraphInline(SortableHiddenMixin, NestedStackedPolymorphicInline.Child):
        model = Paragraph
        sortable_field_name = 'ordering'
    class InfoInline(SortableHiddenMixin, NestedStackedPolymorphicInline.Child):
        model = Info
        sortable_field_name = 'ordering'
    class PictureInline(SortableHiddenMixin, NestedStackedPolymorphicInline.Child):
        model = Picture
        sortable_field_name = 'ordering'
    child_inlines = [H1Inline, H2Inline, H3Inline, ParagraphInline, InfoInline, PictureInline]
    sortable_field_name = 'ordering'


class SectionInlineAdmin(SortableHiddenMixin, NestedTabularInline):
    model = Section
    inlines = [ContentInline, ]
    sortable_field_name = 'ordering'
    extra = 1
    max_num = 5


class ArticleAdmin(NestedPolymorphicModelAdmin):
    model = Article
    inlines = [SectionInlineAdmin, ]
    list_display = ('__str__', 'create_at', 'update_at')


admin.site.register(Article, ArticleAdmin)
