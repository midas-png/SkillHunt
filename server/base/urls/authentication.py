from django.urls import path

from base.view_sets.authentication import *

urlpatterns = [
    path('signIn', SignIn.as_view()),
    path('signUp', SignUp.as_view())
]