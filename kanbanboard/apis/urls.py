from django.urls import path
from .views import *

urlpatterns = [
    path('homePage/', GetBoard.as_view()),
    path('boardQuery/<str:board_id>/', GetBoardId.as_view())
]