# Generated by Django 3.0.3 on 2020-05-09 23:01

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('cases', '0004_case_short_descriptions'),
    ]

    operations = [
        migrations.RenameField(
            model_name='case',
            old_name='short_descriptions',
            new_name='short_description',
        ),
    ]
