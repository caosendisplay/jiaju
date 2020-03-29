import uuid
from django.db import models
from django.utils.translation import gettext_lazy as _


def upload_and_rename(instance, filename):
    ext = filename.split('.')[-1]
    return 'images/{}.{}'.format(instance.pk, ext)


class View(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=80, unique=True)

    def __str__(self):
        return self.name


class Component(models.Model):
    id = models.AutoField(primary_key=True)
    view = models.ForeignKey(View, related_name='components', on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=80)

    class Meta:
        unique_together = ('view', 'name')

    def __str__(self):
        return '{}.{}'.format(self.view, self.name)


class ComponentLineItem(models.Model):
    uuid = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    component = models.ForeignKey(Component, related_name='line_items', on_delete=models.SET_NULL, null=True)
    image = models.ImageField(upload_to=upload_and_rename, verbose_name=_('图片'), null=True, blank=True)
    short_description = models.CharField(max_length=80, null=True, blank=True)
    description = models.CharField(max_length=80, null=True, blank=True)
