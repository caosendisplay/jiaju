# Generated by Django 3.0.3 on 2020-03-29 00:41

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('component', '0003_auto_20200329_0039'),
    ]

    operations = [
        migrations.AlterField(
            model_name='componentlineitem',
            name='component',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='line_items', to='component.Component'),
        ),
    ]
