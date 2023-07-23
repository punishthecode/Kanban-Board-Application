from django.urls import path
from .views import *

#API urls for CRUD operations.
urlpatterns = [
     path('boards/', BoardTB.as_view(), name = "Boards"),
     path('boards/<str:pk>/', BoardTB.as_view(), name = "BoardsById"),
     path('users/', UserTB.as_view(), name = 'Users'),
     path('users/<str:pk>/', UserTB.as_view(), name = "UsersByID"),
     path('lists/', ListTB.as_view(), name = "Lists"),
     path('lists/<str:pk>/', ListTB.as_view(), name = "ListsByID"),
     path('tasks/', TaskTB.as_view(), name = "Tasks"),
     path('tasks/<str:pk>/', TaskTB.as_view(), name = "TasksById"),
     path('commits/', CommitTB.as_view(), name = "Commits"),
     path('commits/<str:pk>/', CommitTB.as_view(), name = "CommitsById"),
]