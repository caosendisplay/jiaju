# Generated by Django 3.0.3 on 2020-05-11 06:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('component', '0008_auto_20200508_0323'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='componentlineitem',
            options={'ordering': ('ordering',), 'verbose_name': '页面子元素', 'verbose_name_plural': '页面子元素'},
        ),
        migrations.AddField(
            model_name='componentlineitem',
            name='ordering',
            field=models.IntegerField(default=0, verbose_name='排序'),
        ),
    ]
