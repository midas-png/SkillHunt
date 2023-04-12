from django.db import models

from . import user
from . import vacancy


class Response(models.Model):
    message = models.CharField(max_length=255, default='')
    status = models.CharField(max_length=255, default='Ожидает рассмотрения')

    user_id = models.ForeignKey(to=user.User, on_delete=models.DO_NOTHING)
    vacancy_id = models.ForeignKey(to=vacancy.Vacancy, on_delete=models.CASCADE)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'responses'
