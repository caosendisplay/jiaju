import uuid
from django.db import models
from django.utils.translation import gettext_lazy as _
from ..users.models import User


class Message(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    create_at = models.DateTimeField(_('创建时间'), auto_now_add=True)
    user = models.ForeignKey(User, verbose_name=_('用户'), related_name='messages', on_delete=models.CASCADE)
    body = models.TextField(_('消息内容'), blank=True)

    class Meta:
        ordering = ('user', 'create_at', )
        verbose_name = _('消息')
        verbose_name_plural = _('消息')


