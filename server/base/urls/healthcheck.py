from django.urls import path
from base.view_sets import healthcheck

urlpatterns = [
    path('', healthcheck)
]