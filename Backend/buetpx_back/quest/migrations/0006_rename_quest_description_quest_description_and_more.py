# Generated by Django 4.0.6 on 2022-08-25 17:33

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('quest', '0005_alter_quest_end_date_alter_quest_start_date'),
    ]

    operations = [
        migrations.RenameField(
            model_name='quest',
            old_name='quest_description',
            new_name='description',
        ),
        migrations.RenameField(
            model_name='quest',
            old_name='end_date',
            new_name='endDate',
        ),
        migrations.RenameField(
            model_name='quest',
            old_name='photo_url',
            new_name='photoUrl',
        ),
        migrations.RenameField(
            model_name='quest',
            old_name='start_date',
            new_name='startDate',
        ),
        migrations.RenameField(
            model_name='quest',
            old_name='quest_theme',
            new_name='theme',
        ),
        migrations.RenameField(
            model_name='quest',
            old_name='quest_title',
            new_name='title',
        ),
    ]