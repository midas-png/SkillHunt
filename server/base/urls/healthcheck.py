from django.urls import path
from base.views import healthcheck

urlpatterns = [
    path('', healthcheck)
]