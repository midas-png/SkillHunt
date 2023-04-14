from django.db import models

from . import user


class UserExperience(models.Model):
    job_title = models.CharField(max_length=60, default='')
    job_duration = models.DateField()
    company_name = models.CharField(max_length=60)

    user_id = models.ForeignKey(to=user.User, on_delete=models.CASCADE)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'users_experience'
