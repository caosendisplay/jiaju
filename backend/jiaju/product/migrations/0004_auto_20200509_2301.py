# Generated by Django 3.0.3 on 2020-05-09 23:01

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0003_auto_20200509_2259'),
    ]

    operations = [
        migrations.RenameField(
            model_name='product',
            old_name='short_descriptions',
            new_name='short_description',
        ),
    ]