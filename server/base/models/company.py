from django.db import models


class Company(models.Model):
    name = models.CharField(max_length=60, default='')
    activity_field = models.CharField(max_length=100, default='')
    image = models.CharField(max_length=200, default='')
    email = models.EmailField(max_length=200, unique=True)
    password = models.CharField(max_length=16, null=False)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'companies'
