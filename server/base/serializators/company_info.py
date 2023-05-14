from rest_framework import serializers
from base.models import CompanyInfo


class CompanyInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = CompanyInfo
        fields = ['name', 'activity_field']

    def create(self, validated_data):
        return CompanyInfo.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', validated_data.name)
        instance.activity_field = validated_data. \
            get('activity_field', validated_data.activity_field)
        instance.save()
        return instance


class CompanyInfoGetSerializer(serializers.ModelSerializer):
    class Meta:
        model = CompanyInfo
        fields = ['name', 'activity_field', 'user_id']
