from django.shortcuts import render
from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponseRedirect

from django.views import View
from django.contrib.auth.decorators import login_required
from django.contrib import messages

from home.models import Test

# Create your views here.

class Home(View):
    template_name= 'home.html'

    def get(self, *args, **kwargs):
        tests = Test.objects.all().order_by('-id')

        context = {
            'tests':tests,
        }
        return render(self.request, self.template_name, context=context)

class Invoice(View):
    template_name= 'invoice.html'

    def get(self, *args, **kwargs):
        tests = Test.objects.all().order_by('-id')

        context = {
            'tests':tests,
        }
        return render(self.request, self.template_name, context=context)

    def post(self, *args, **kwargs):
        tests = Test.objects.all().order_by('-id')

        context = {
            'tests':tests,
        }
        return render(self.request, self.template_name, context=context)