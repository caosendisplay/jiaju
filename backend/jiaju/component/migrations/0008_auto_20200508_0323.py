# Generated by Django 3.0.3 on 2020-05-08 03:23

from django.db import migrations, models
import jiaju.component.models


class Migration(migrations.Migration):

    dependencies = [
        ('component', '0007_auto_20200508_0305'),
    ]

    operations = [
        migrations.AlterField(
            model_name='componentlineitem',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to=jiaju.component.models.upload_and_rename_internal, verbose_name='图片'),
        ),
    ]