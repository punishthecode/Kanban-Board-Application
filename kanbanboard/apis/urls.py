from django.urls import path
from .views import *

#API urls for CRUD operations
urlpatterns = [
    path('users/', UserView.as_view(), name='user-list-create'),
    path('users/<int:pk>/', UserView.as_view(), name='user-retrieve-update-delete'),
    path('tasks/', TaskView.as_view(), name='task-list-create'),
    path('tasks/<int:pk>/', TaskView.as_view(), name='task-retrieve-update-delete'),
    path('lists/', ListView.as_view(), name='list-list-create'),
    path('lists/<int:pk>/', ListView.as_view(), name='list-retrieve-update-delete'),
]