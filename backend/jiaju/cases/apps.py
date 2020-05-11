from django.apps import AppConfig
from django.utils.translation import ugettext_lazy as _


class CasesConfig(AppConfig):
    name = 'cases'
    verbose_name = _('案例')
