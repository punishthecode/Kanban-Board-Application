from django.urls import path
from .views import *

urlpatterns = [
    # Boards
    path('boards/', GetBoard.as_view()),
    path('postboard/', PostBoard.as_view()),
    path('boardsbyid/<str:input_board_id>/', GetBoardId.as_view()),
    path('deleteboard/<str:delete_board_id>', DeleteBoard.as_view()),
    path('updateboard/<str:input_board_id>/', PutBoard.as_view()),

    # Users
    path('users/', GetUsers.as_view()),
    path('postuser/', PostUsers.as_view()),
    path('updateuser/<str:input_user_id>/', UpdateUsers.as_view()),
    path('deleteuser/<str:delete_user_id>', DeleteUsers.as_view()),

]