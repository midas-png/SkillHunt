from django.http import HttpResponse
from rest_framework import status


def healthcheck(request):
    try:
        if request:
            return HttpResponse(status=status.HTTP_200_OK)
    except:
        return HttpResponse(status=status.HTTP_500_INTERNAL_SERVER_ERROR)
