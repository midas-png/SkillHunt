from django.http import HttpResponse
from django.utils.decorators import method_decorator
from drf_yasg.utils import swagger_auto_schema
from rest_framework import viewsets
from rest_framework.generics import *
from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response
from django.core.paginator import Paginator

from base.models import Vacancy
from base.serializators import VacancySerializer, VacancyGetSerializer


class StandardResultsSetPagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size'
    max_page_size = 100


@method_decorator(name='list', decorator=swagger_auto_schema(
    operation_description="description from swagger_auto_schema via method_decorator"))
class VacancyListView(ListAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancyGetSerializer
    pagination_class = StandardResultsSetPagination


@method_decorator(name='create', decorator=swagger_auto_schema(
    operation_description="description from swagger_auto_schema via method_decorator"))
class VacancyCreateView(CreateAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer

    def create(self, request, *args, **kwargs):
        if request.user.user_type == 2:
            serializer = VacancySerializer(data=request.data)
            serializer.is_valid(raise_exception=True)
            serializer.save(company_id=request.user)
            return Response({'post': serializer.data})
        else:
            return Response({'error': 'Only companies can create vacancy'})


@method_decorator(name='update', decorator=swagger_auto_schema(
    operation_description="description from swagger_auto_schema via method_decorator"))
class VacancyUpdateView(UpdateAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer


@method_decorator(name='destroy', decorator=swagger_auto_schema(
    operation_description="description from swagger_auto_schema via method_decorator"))
class VacancyDeleteView(DestroyAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer

    def delete(self, request, *args, **kwargs):
        company_id = request.user.id
        vacancy = self.get_object()

        if company_id == vacancy.company_id:
            self.destroy(request, *args, **kwargs)
        else:
            return Response({'error': 'Forbidden'}, status=403)



