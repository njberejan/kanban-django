# -*- coding: utf-8 -*-
# Generated by Django 1.9.6 on 2016-05-13 14:26
from __future__ import unicode_literals

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('trello', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='task',
            name='time_modified',
            field=models.DateField(default=django.utils.timezone.now),
        ),
    ]
