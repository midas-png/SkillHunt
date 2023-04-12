from django.urls import path, include

urlpatterns = [
    path('', include('base.urls.healthcheck')),
    path('auth/', include("base.urls.authentication")),
]
