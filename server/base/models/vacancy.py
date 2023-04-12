import datetime

from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
from . import company


class Vacancy(models.Model):
    title = models.CharField(max_length=150, default='')
    description = models.CharField(max_length=255, default='')
    salary = models.IntegerField(validators=[MinValueValidator(0.0)])
    key_skills = models.JSONField()
    experience = models.CharField(max_length=255, default='')
    employment_type = models.CharField(max_length=100, default='')
    category = models.CharField(max_length=100, default='')

    company_id = models.ForeignKey(to=company.Company, on_delete=models.CASCADE)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'vacancies'
