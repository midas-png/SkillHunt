from django.urls import path

from .healthcheck import *

urlpatterns = [
    path('', healthcheck),
]
