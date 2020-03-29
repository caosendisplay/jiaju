# Generated by Django 3.0.3 on 2020-03-29 00:39

from django.db import migrations, models
import django.db.models.deletion
import jiaju.component.models


class Migration(migrations.Migration):

    dependencies = [
        ('component', '0002_auto_20200328_0553'),
    ]

    operations = [
        migrations.AlterField(
            model_name='componentlineitem',
            name='component',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='line_items', to='component.Component'),
        ),
        migrations.AlterField(
            model_name='componentlineitem',
            name='image',
            field=models.ImageField(upload_to=jiaju.component.models.upload_and_rename, verbose_name='图片'),
        ),
    ]
