from django.urls import path

from base.view_sets.company_info import *

urlpatterns = [
    path('', CompanyApiView.as_view()),
    path('<int:pk>/', CompanyApiView.as_view())
]
