from django.db import models
from . import user


class UserMedia(models.Model):
    name = models.CharField(max_length=50)
    link = models.URLField(default='')

    user_id = models.ForeignKey(to=user.User, on_delete=models.CASCADE)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'users_media'
