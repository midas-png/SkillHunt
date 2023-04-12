from django.db import models
from . import user
from django.core.validators import MinValueValidator


class UserInfo(models.Model):
    first_name = models.CharField(max_length=60)
    last_name = models.CharField(max_length=60)
    middle_name = models.CharField(max_length=60)
    job_title = models.CharField(max_length=60)
    experience = models.CharField(max_length=60)
    motto = models.CharField(max_length=60)
    salary_expectations = models.IntegerField(validators=[MinValueValidator(0.0)])
    image = models.CharField(max_length=200, default='')

    user_id = models.ForeignKey(to=user.User, on_delete=models.CASCADE)

    create_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name_plural = 'users_info'
