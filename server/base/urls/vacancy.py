from django.urls import path, include

from base.view_sets.vacancy import *

urlpatterns = [
    path('', VacancyListView.as_view()),
    path('create/', VacancyCreateView.as_view()),
    path('<int:pk>/', VacancyUpdateView.as_view()),
    path('delete/<int:pk>/', VacancyDeleteView.as_view())
]
