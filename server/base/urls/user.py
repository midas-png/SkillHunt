from django.urls import path

from base.view_sets.user import *

urlpatterns = [
    path('', UserApiView.as_view())
]
