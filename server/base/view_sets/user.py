from drf_yasg.utils import swagger_auto_schema
from rest_framework.response import Response
from rest_framework.views import APIView

from base.models import User
from base.serializators import UserGetSerializer


class UserApiView(APIView):

    @swagger_auto_schema()
    def get(self, request):
        users = User.objects.all()
        serializer = UserGetSerializer(users, many=True)
        return Response(serializer.data)
