from django.contrib import admin

from .models import *

for model in MODEL_LIST:
    admin.site.register(model)

    # Если понадобится специфичные настройки для каждой модели, то нужно делать вручную
