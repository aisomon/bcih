from django.urls import path
from django.contrib.auth.decorators import login_required
from .views import *

urlpatterns = [
    path('', Home.as_view(), name='home',),
    path('invoice/', Invoice.as_view(), name='invoice'),

]