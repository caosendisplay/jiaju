# Generated by Django 3.0.3 on 2020-03-28 05:47

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Component',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('view', models.CharField(max_length=80, unique=True)),
                ('name', models.CharField(max_length=80)),
            ],
        ),
        migrations.CreateModel(
            name='ComponentLineItem',
            fields=[
                ('uuid', models.UUIDField(primary_key=True, serialize=False)),
                ('image', models.ImageField(upload_to='media/images/', verbose_name='图片')),
                ('component', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, related_name='line_items', to='component.Component')),
            ],
        ),
    ]
