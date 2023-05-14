from rest_framework import serializers
from base import models
from base.models import Vacancy


class VacancySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Vacancy
        fields = [
            'id',
            'title',
            'description',
            'salary',
            'key_skills',
            'experience',
            'employment_type',
            'category'
        ]

    def create(self, validated_data):
        return Vacancy.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.id = validated_data.get('id', validated_data.id)
        instance.title = validated_data.get('title', validated_data.title)
        instance.description = validated_data.get('description', validated_data.description)
        instance.salary = validated_data.get('salary', validated_data.salary)
        instance.key_skills = validated_data.get('key_skills', validated_data.key_skills)
        instance.experience = validated_data.get('experience', validated_data.experience)
        instance.employment_type = validated_data.get('employment_type', validated_data.employment_type)
        instance.category = validated_data.get('category', validated_data.category)
        instance.save()
        return instance


class VacancyGetSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Vacancy
        fields = [
            'id',
            'title',
            'description',
            'salary',
            'key_skills',
            'experience',
            'employment_type',
            'category',
            'company_id'
        ]