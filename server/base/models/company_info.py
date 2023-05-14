from django.db import models
from . import user


class CompanyInfo(models.Model):
    name = models.CharField(max_length=60, default='')
    activity_field = models.CharField(max_length=100, default='')
    image = models.CharField(max_length=200, default='')

    user_id = models.ForeignKey(to=user.User, on_delete=models.CASCADE)

    create_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name_plural = 'company_info'

    def __str__(self):
        return self.name
