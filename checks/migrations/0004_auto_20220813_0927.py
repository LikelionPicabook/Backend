# Generated by Django 2.1.15 on 2022-08-13 09:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('checks', '0003_auto_20220810_1553'),
    ]

    operations = [
        migrations.AlterField(
            model_name='photobox',
            name='lat',
            field=models.DecimalField(decimal_places=14, max_digits=17),
        ),
    ]