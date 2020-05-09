import uuid
from django.db import models
from django.utils.translation import gettext_lazy as _
from ..utils import upload_and_rename


def upload_and_rename_internal(_, filename):
    return upload_and_rename(uuid.uuid4(), filename)


class View(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=80, unique=True)

    class Meta:
        verbose_name = _('页面')
        verbose_name_plural = _('页面')

    def __str__(self):
        return self.name


class Component(models.Model):
    id = models.AutoField(primary_key=True)
    view = models.ForeignKey(View, verbose_name=_('页面'), related_name='components', on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=80, verbose_name=_('页面元素名称'))
    description = models.CharField(max_length=80, verbose_name=_('描述'), null=True)

    class Meta:
        unique_together = ('view', 'name')
        verbose_name = _('页面元素')
        verbose_name_plural = _('页面元素')

    def __str__(self):
        return '{}.{}'.format(self.view, self.name)


class ComponentLineItem(models.Model):
    uuid = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    component = models.ForeignKey(Component, related_name='line_items', on_delete=models.SET_NULL, null=True)
    image = models.ImageField(upload_to=upload_and_rename_internal, verbose_name=_('图片'), null=True, blank=True)
    short_description = models.CharField(max_length=80, null=True, blank=True)
    description = models.CharField(max_length=80, null=True, blank=True)
