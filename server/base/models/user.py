from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    username = None
    email = models.EmailField(max_length=100, unique=True)
    password = models.CharField(max_length=255)

    types = (
        (1, 'User'),
        (2, 'Company')
    )
    user_type = models.IntegerField(choices=types, default=1)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    class Meta:
        db_table = 'users'

    def __str__(self):
        return str(self.id)