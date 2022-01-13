
from django.contrib import admin
from django.urls import path
from blog import views

urlpatterns = [
    path('', views.index, name='home'),
    path('signin/', views.signin, name="logIn"),
    path('signup/', views.signup, name="signup"),
    path('rasberry/', views.rasberry, name="raspberry"),
    path('burger/', views.burger, name="burger"),
    path('caldereta/', views.caldereta, name="caldereta"),
    path('honey/', views.honey, name="honey"),
    path('macaron/', views.macaron, name="macaron"),
    path('mango/', views.mango, name="mango"),
    path('sisig/', views.sisig, name="sisig"),
    path('admin/', admin.site.urls),
    path('motehingar/', views.motehingar, name="motehingar"),
    path('scrambled_eggs/', views.scrambled_eggs, name="scrambled_eggs"),
    path('lasagna/', views.lasagna, name="lasagna"),
    path('protein_pancakes/', views.protein_pancakes, name="protein_pancakes"),
    path('pastelon/', views.pastelon, name="pastelon"),
    path('spaghetti/', views.spaghetti, name="spaghetti"),
    path('mushroom/', views.mushroom, name="mushroom"),
    path('chicken/', views.chicken, name="chicken"),
    path('coconut/', views.coconut, name="coconut"),
]
