from coreapi.auth import TokenAuthentication
from django.views.generic.edit import CreateView
from drf_yasg.utils import swagger_auto_schema
from rest_framework.decorators import permission_classes, authentication_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from base.models import CompanyInfo
from base.serializators import CompanyInfoSerializer, CompanyInfoGetSerializer


class CompanyApiView(APIView, CreateView):

    @swagger_auto_schema()
    def get(self, request):
        companies = CompanyInfo.objects.all()
        serializer = CompanyInfoGetSerializer(companies, many=True)
        return Response(serializer.data)

    @permission_classes([IsAuthenticated])
    @authentication_classes([TokenAuthentication])
    @swagger_auto_schema(request_body=CompanyInfoSerializer)
    def post(self, request):
        serializer = CompanyInfoSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(user_id=request.user)
        return Response({'post': serializer.data})

    @permission_classes([IsAuthenticated])
    @authentication_classes([TokenAuthentication])
    @swagger_auto_schema(request_body=CompanyInfoSerializer)
    def update(self, request, *args, **kwargs):
        pk = kwargs.get('pk', None)
        if not pk:
            return Response({'error': 'method PUT not allowed'})

        try:
            instance = CompanyInfo.objects.get(pk=pk)
        except:
            return Response({"error": "Object does not exist"})

        serializer = CompanyInfoSerializer(data=request.data, instance=instance)
        serializer.is_valid()
        serializer.save()
        return Response({'post': serializer.data})
