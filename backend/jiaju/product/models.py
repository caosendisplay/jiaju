import uuid
from django.db import models
from django.utils.safestring import mark_safe
from django.utils.translation import gettext_lazy as _
from ..common.models import Article
from ..utils import upload_and_rename


def upload_and_rename_product_detail(instance, filename):
    return upload_and_rename(instance.pk, filename)


class Category(models.Model):
    id = models.AutoField(primary_key=True)
    create_at = models.DateTimeField(_('创建时间'), auto_now_add=True)
    update_at = models.DateTimeField(_('修改时间'), auto_now=True)
    name = models.CharField(_("名称"), max_length=80, unique=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = _('产品类型')
        verbose_name_plural = _('产品类型')


class Product(models.Model):
    id = models.AutoField(primary_key=True)
    create_at = models.DateTimeField(_('创建时间'), auto_now_add=True)
    update_at = models.DateTimeField(_('修改时间'), auto_now=True)
    category = models.ForeignKey(Category, verbose_name=_('产品类型'), related_name='products', on_delete=models.SET_NULL, null=True)
    name = models.CharField(_("名称"), max_length=80)
    short_description = models.TextField(_('简介'), null=True, blank=True)

    def __str__(self):
        return '{}-{}'.format(self.category, self.name)

    class Meta:
        verbose_name = _('产品')
        verbose_name_plural = _('产品')


class ProductPicture(models.Model):
    uuid = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    create_at = models.DateTimeField(_('创建时间'), auto_now_add=True)
    update_at = models.DateTimeField(_('修改时间'), auto_now=True)
    product = models.ForeignKey(Product, verbose_name='产品', related_name='images', on_delete=models.SET_NULL, null=True)
    image = models.ImageField(upload_to=upload_and_rename_product_detail, verbose_name=_('图片'))
    description = models.CharField(_('描述'), max_length=80, null=True, blank=True)
    featured = models.BooleanField(_('是否首页展示'), default=False)
    cover = models.BooleanField(_('是否作为封面'), default=False)

    class Meta:
        verbose_name = _('产品图片')
        verbose_name_plural = _('产品图片')

    def image_tag(self):
        return mark_safe('<img src="%s" width="150" height="150" />' % (self.image.url))
    image_tag.short_description = '图片预览'


class ProductDetailedDescription(models.Model):
    id = models.AutoField(primary_key=True)
    product = models.OneToOneField(Product, on_delete=models.CASCADE)
    article = models.OneToOneField(Article, on_delete=models.CASCADE, null=True)

    class Meta:
        verbose_name = _('产品详情描述')
        verbose_name_plural = _('产品详情描述')
