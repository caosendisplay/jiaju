from django.apps import AppConfig
from django.utils.translation import ugettext_lazy as _


class ProductConfig(AppConfig):
    name = 'jiaju.product'
    verbose_name = _('现货产品')
