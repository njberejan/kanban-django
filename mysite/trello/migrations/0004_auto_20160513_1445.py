# -*- coding: utf-8 -*-
# Generated by Django 1.9.6 on 2016-05-13 14:45
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('trello', '0003_auto_20160513_1443'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='time_modified',
            field=models.DateTimeField(auto_now=True),
        ),
    ]
