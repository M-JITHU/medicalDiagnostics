# Generated by Django 4.1.7 on 2023-04-06 15:51

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0003_rename_patientdb_patientdb3'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Patientdb3',
            new_name='Patientdb',
        ),
    ]
