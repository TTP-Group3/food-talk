
from django.contrib import admin
from django.urls import path
from blog import views

urlpatterns = [
    path('', views.index, name='home'),
    path('logIn/', views.logIn, name="logIn"),
    path('rasberry/', views.rasberry, name="raspberry"),
    path('burger/', views.burger, name="burger"),
    path('caldereta/', views.caldereta, name="caldereta"),
    path('honey/', views.honey, name="honey"),
    path('macaron/', views.macaron, name="macaron"),
    path('mango/', views.mango, name="mango"),
    path('pastelon/', views.pastelon, name="pastelon"),
    path('sisig/', views.sisig, name="sisig"),
    path('admin/', admin.site.urls),
    path('motehingar/', views.motehingar, name="motehingar"),
]
