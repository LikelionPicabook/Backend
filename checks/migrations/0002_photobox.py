# Generated by Django 2.1.15 on 2022-08-10 15:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('checks', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='PhotoBox',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('lat', models.DecimalField(decimal_places=19, max_digits=19)),
                ('lon', models.DecimalField(decimal_places=19, max_digits=19)),
            ],
        ),
    ]