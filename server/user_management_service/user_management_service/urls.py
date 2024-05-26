
from django.urls import re_path
from . import views

urlpatterns = [
    re_path('api/login', views.login),
    re_path('api/signup', views.login)
]
