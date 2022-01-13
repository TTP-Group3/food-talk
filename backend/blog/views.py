from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def index(request):
    return render(request, 'blog/index.html')

def logIn(request):
    return render(request, 'blog/login.html')

def rasberry(request):
    return render(request, 'blog/raspberry.html')

def burger(request):
    return render(request, 'blog/burger.html')

def caldereta(request):
    return render(request, 'blog/caldereta.html')

def honey(request):
    return render(request, 'blog/honey.html')

def macaron(request):
    return render(request, 'blog/macaron.html')

def mango(request):
    return render(request, 'blog/mango.html')

def pastelon(request):
    return render(request, 'blog/pastelon.html')

def sisig(request):
    return render(request, 'blog/sisig.html')

def motehingar(request):
    return render(request, 'blog/motehingar.html')

def scrambled_eggs(request):
    return render(request, 'blog/scrambled_eggs.html')