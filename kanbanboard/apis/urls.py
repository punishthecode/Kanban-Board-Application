from django.urls import path
from .views import *

# urlpatterns = [
#     # Boards
#     path('boards/', GetBoard.as_view()),
#     path('postboard/', PostBoard.as_view()),
#     path('boardbyid/<str:input_board_id>/', GetBoardId.as_view()),
#     path('updateboard/<str:input_board_id>/', PutBoard.as_view()),
#     path('deleteboard/<str:delete_board_id>', DeleteBoard.as_view()),

#     # Users
#     path('users/', GetUsers.as_view()),
#     path('postuser/', PostUsers.as_view()),
#     path('userbyid/<str:input_user_id>/', GetUserId.as_view()),
#     path('updateuser/<str:input_user_id>/', UpdateUsers.as_view()),
#     path('deleteuser/<str:delete_user_id>', DeleteUsers.as_view()),

#     #Tasks
#     path('tasks/', GetTasks.as_view()),
#     path('posttask/', PostTasks.as_view()),
#     path('taskbyid/<str:input_task_id>/', GetTaskId.as_view()),
#     path('updatetask/<str:input_task_id>/', PutTasks.as_view()),
#     path('deletetask/<str:delete_task_id>', DeleteTasks.as_view()),

#     #Commits
#     path('commits/', GetCommits.as_view()),
#     path('postcommit/', PostCommits.as_view()),
#     path('commitbyid/<str:input_commit_id>/', GetCommitId.as_view()),
#     path('updatecommit/<str:input_commit_id>/', PutCommits.as_view()),
#     path('deletecommit/<str:delete_commit_id>', DeleteCommits.as_view()),

#     #Lists
#     path('lists/', GetLists.as_view()),
#     path('postlist/', PostLists.as_view()),
#     path('listbyid/<str:input_list_id>/', GetListId.as_view()),
#     path('updatelist/<str:input_list_id>/', PutLists.as_view()),
#     path('deletelist/<str:delete_list_id>', DeleteLists.as_view()),
    
# ]

# from django.urls import path
# from .views import *

# urlpatterns = [
#     # Boards
#     path('boards/', BoardListCreateView.as_view(), name='board-list'),
#     path('boards/<str:board_id>/', BoardRetrieveUpdateDestroyView.as_view(), name='board-detail'),

#     # Users
#     path('users/', UserListCreateView.as_view(), name='user-list'),
#     path('users/<str:user_id>/', UserRetrieveUpdateDestroyView.as_view(), name='user-detail'),

#     # Tasks
#     path('tasks/', TaskListCreateView.as_view(), name='task-list'),
#     path('tasks/<str:task_id>/', TaskRetrieveUpdateDestroyView.as_view(), name='task-detail'),

#     # Commits
#     path('commits/', CommitListCreateView.as_view(), name='commit-list'),
#     path('commits/<str:commit_id>/', CommitRetrieveUpdateDestroyView.as_view(), name='commit-detail'),

#     # Lists
#     path('lists/', ListListCreateView.as_view(), name='list-list'),
#     path('lists/<str:list_id>/', ListRetrieveUpdateDestroyView.as_view(), name='list-detail'),
# ]

urlpatterns = [
     path('boards/', BoardTB.as_view(), name = "ToBoards"),
     path('boards/<str:pk>/', BoardTB.as_view(), name = "ToBoardsById"),
     path('users/', UserTB.as_view(), name = 'ToUsers'),
     path('users/<str:pk>/', UserTB.as_view(), name = "ToUsersByID"),
     path('lists/', ListTB.as_view(), name = "ToList"),
     path('lists/<str:pk>/', ListTB.as_view(), name = "ToListByID"),
     path('tasks/', TaskTB.as_view(), name = "ToCards"),
     path('tasks/<str:pk>/', TaskTB.as_view(), name = "ToCardsById"),
     path('commits/', CommitTB.as_view(), name = "ToCommit"),
     path('commits/<str:pk>/', CommitTB.as_view(), name = "ToCommitById"),
]