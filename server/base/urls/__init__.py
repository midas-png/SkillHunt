from django.urls import path, include

urlpatterns = [
    path('', include('base.urls.healthcheck')),
    path('auth/', include("base.urls.authentication")),
    path('company/', include("base.urls.company")),
    path('user/', include("base.urls.user")),
    path('vacancy/', include("base.urls.vacancy"))
]
