import uuid
from django.db import models
from django.utils.translation import gettext_lazy as _
from polymorphic.models import PolymorphicModel
from ..utils import upload_and_rename


def upload_and_rename_internal(_, filename):
    return upload_and_rename(uuid.uuid4(), filename)


class Article(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(_('名称'), max_length=80, null=True, blank=True)
    create_at = models.DateTimeField(_('创建时间'), auto_now_add=True)
    update_at = models.DateTimeField(_('修改时间'), auto_now=True)

    class Meta:
        verbose_name = _('详情描述')
        verbose_name_plural = _('详情描述')

    def __str__(self):
        if self.name:
            return self.name
        elif hasattr(self, 'casedetaileddescription'):
            return "{} 详情描述".format(self.casedetaileddescription.case.name)
        else:
            return "未知详情 {}".format(self.id)


class Section(models.Model):
    id = models.AutoField(primary_key=True)
    article = models.ForeignKey(Article, verbose_name='详情描述', related_name='sections', on_delete=models.CASCADE)
    ordering = models.IntegerField(verbose_name=_('排序'), default=0)

    class Meta:
        verbose_name = _('段落')
        verbose_name_plural = _('段落')
        ordering = ('ordering',)


class Content(PolymorphicModel):
    id = models.AutoField(primary_key=True)
    section = models.ForeignKey(Section, verbose_name='段落', related_name="contents", on_delete=models.CASCADE)
    create_at = models.DateTimeField(_('创建时间'), auto_now_add=True)
    ordering = models.IntegerField(verbose_name=_('排序'), default=0)

    class Meta:
        verbose_name = _('内容')
        verbose_name_plural = _('内容')
        ordering = ('ordering', '-create_at',)


class H1(Content):
    detail = models.CharField(_('一级标题内容'), max_length=80)

    class Meta:
        verbose_name = _('一级标题')
        verbose_name_plural = _('一级标题')


class H2(Content):
    detail = models.CharField(_('二级标题内容'), max_length=80)

    class Meta:
        verbose_name = _('二级标题')
        verbose_name_plural = _('二级标题')


class H3(Content):
    detail = models.CharField(_('三级标题内容'), max_length=80)

    class Meta:
        verbose_name = _('三级标题')
        verbose_name_plural = _('三级标题')


class Info(Content):
    detail = models.CharField(_('小字内容'), max_length=80)

    class Meta:
        verbose_name = _('小字')
        verbose_name_plural = _('小字')


class Paragraph(Content):
    detail = models.TextField(_('正文内容'))

    class Meta:
        verbose_name = _('正文')
        verbose_name_plural = _('正文')


class Picture(Content):
    detail = models.ImageField(upload_to=upload_and_rename_internal, verbose_name=_('图片'))

    class Meta:
        verbose_name = _('图片')
        verbose_name_plural = _('图片')