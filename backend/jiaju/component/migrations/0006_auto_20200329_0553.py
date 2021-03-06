# Generated by Django 3.0.3 on 2020-03-29 05:53

from django.db import migrations, models
import jiaju.component.models


class Migration(migrations.Migration):

    dependencies = [
        ('component', '0005_auto_20200329_0511'),
    ]

    operations = [
        migrations.AddField(
            model_name='componentlineitem',
            name='description',
            field=models.CharField(blank=True, max_length=80, null=True),
        ),
        migrations.AddField(
            model_name='componentlineitem',
            name='short_description',
            field=models.CharField(blank=True, max_length=80, null=True),
        ),
        migrations.AlterField(
            model_name='componentlineitem',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to=jiaju.component.models.upload_and_rename, verbose_name='图片'),
        ),
    ]
