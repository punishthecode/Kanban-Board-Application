# from django.shortcuts import render
# from rest_framework.decorators import api_view
# from django.views.generic import View
# from .serializers import *
# from django.http import JsonResponse, JsonResponse
# from .models import *
# from rest_framework import generics, status
# from rest_framework.views import APIView
# Create your views here.

# #Board
# class GetBoard(APIView):
#     def get(self, request):
#         boards = Board.objects.all()
#         serialized = BoardSerializer(boards, many=True)
#         return JsonResponse(serialized.data, status = status.HTTP_200_OK, safe=False)
    
# class PostBoard(APIView):
#     def post(self, request):
#         serializer = BoardSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return JsonResponse(serializer.data, status = status.HTTP_200_OK, safe=False)
#         return JsonResponse(serializer.errors, status = status.HTTP_400_BAD_REQUEST, safe=False)

# class PutBoard(APIView):
#     def put(self, request, input_board_id):
#         board = Board.objects.get(board_id = input_board_id)
#         serializer = BoardSerializer(board, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return JsonResponse(serializer.data, status = status.HTTP_200_OK, safe=False)
#         return JsonResponse(serializer.errors, status = status.HTTP_400_BAD_REQUEST, safe=False)
    
# class DeleteBoard(APIView):
#     def delete(self, request, delete_board_id):
#         board = Board.objects.get(board_id = delete_board_id)
#         board.delete()
#         return JsonResponse("Deleted User", safe=False)
    
# class GetBoardId(APIView):
#     def get(self, request, input_board_id):
#             board = Board.objects.filter(board_id = input_board_id)
#             serialized = BoardSerializer(board, many = True)
#             return JsonResponse(serialized.data, status = status.HTTP_200_OK, safe=False)
    
# #User
# class GetUsers(APIView):
#     def get(self, request):
#         users = User.objects.all()
#         serialized = UserSerializer(users, many=True)
#         return JsonResponse(serialized.data, status = status.HTTP_200_OK, safe=False)
    
# class PostUsers(APIView):
#     def post(self, request):
#         serializer = UserSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return JsonResponse(serializer.data, status = status.HTTP_200_OK, safe=False)
#         return JsonResponse(serializer.errors, status = status.HTTP_400_BAD_REQUEST, safe=False)
    
# class UpdateUsers(APIView):
#     def put(self, request, input_user_id):
#         user = User.objects.get(user_id = input_user_id)
#         serializer = UserSerializer(user, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return JsonResponse(serializer.data, status = status.HTTP_200_OK, safe=False)
#         return JsonResponse(serializer.errors, status = status.HTTP_400_BAD_REQUEST, safe=False)
    
# class DeleteUsers(APIView):
#     def delete(self, request, delete_user_id):
#         user = User.objects.get(user_id = delete_user_id)
#         user.delete()
#         return JsonResponse("Deleted User", safe=False)
    
# class GetUserId(APIView):
#     def get(self, request, input_user_id):
#         user = User.objects.filter(user_id = input_user_id)
#         serialized = UserSerializer(user, many = True)
#         return JsonResponse(serialized.data, status = status.HTTP_200_OK, safe=False)
    
# # Tasks
# class GetTasks(APIView):
#     def get(self, request):
#         tasks = Task.objects.all()
#         serialized = TaskSerializer(tasks, many=True)
#         return JsonResponse(serialized.data, status = status.HTTP_200_OK, safe=False)
    
# class PostTasks(APIView):
#     def post(self, request):
#         serializer = TaskSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return JsonResponse(serializer.data, status = status.HTTP_200_OK, safe=False)
#         return JsonResponse(serializer.errors, status = status.HTTP_400_BAD_REQUEST, safe=False)
    
# class PutTasks(APIView):
#     def put(self, request, input_task_id):
#         task = Task.objects.get(task_id = input_task_id)
#         serializer = TaskSerializer(task, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return JsonResponse(serializer.data, status = status.HTTP_200_OK, safe=False)
#         return JsonResponse(serializer.errors, status = status.HTTP_400_BAD_REQUEST, safe=False)
    
# class DeleteTasks(APIView):
#     def delete(self, request, delete_task_id):
#         task = Task.objects.get(task_id = delete_task_id)
#         task.delete()
#         return JsonResponse("Deleted Task", safe=False)
    
# class GetTaskId(APIView):
#     def get(self, request, input_task_id):
#         task = Task.objects.filter(task_id = input_task_id)
#         serialized = TaskSerializer(task, many = True)
#         return JsonResponse(serialized.data, status = status.HTTP_200_OK, safe=False)
    
# #Commits

# class GetCommits(APIView):
#     def get(self, request):
#         commits = Commit.objects.all()
#         serialized = CommitSerializer(commits, many=True)
#         return JsonResponse(serialized.data, status = status.HTTP_200_OK, safe=False)
    
# class PostCommits(APIView):
#     def post(self, request):
#         serializer = CommitSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return JsonResponse(serializer.data, status = status.HTTP_200_OK, safe=False)
#         return JsonResponse(serializer.errors, status = status.HTTP_400_BAD_REQUEST, safe=False)
    
# class PutCommits(APIView):
#     def put(self, request, input_commit_id):
#         commit = Commit.objects.get(commit_id = input_commit_id)
#         serializer = CommitSerializer(commit, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return JsonResponse(serializer.data, status = status.HTTP_200_OK, safe=False)
#         return JsonResponse(serializer.errors, status = status.HTTP_400_BAD_REQUEST, safe=False)
    
# class DeleteCommits(APIView):
#     def delete(self, request, delete_commit_id):
#         commit = Commit.objects.get(commit_id = delete_commit_id)
#         commit.delete()
#         return JsonResponse("Deleted Commit", safe=False)
    
# class GetCommitId(APIView):
#     def get(self, request, input_commit_id):
#         commit = Commit.objects.filter(commit_id = input_commit_id)
#         serialized = CommitSerializer(commit, many = True)
#         return JsonResponse(serialized.data, status = status.HTTP_200_OK, safe=False)

# #Lists

# class GetLists(APIView):
#     def get(self, request):
#         lists = List.objects.all()
#         serialized = ListSerializer(lists, many=True)
#         return JsonResponse(serialized.data, status = status.HTTP_200_OK, safe=False)
    
# class PostLists(APIView):
#     def post(self, request):
#         serializer = ListSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return JsonResponse(serializer.data, status = status.HTTP_200_OK, safe=False)
#         return JsonResponse(serializer.errors, status = status.HTTP_400_BAD_REQUEST, safe=False)

# class PutLists(APIView):
#     def put(self, request, input_list_id):
#         list = List.objects.get(list_id = input_list_id)
#         serializer = ListSerializer(list, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return JsonResponse(serializer.data, status = status.HTTP_200_OK, safe=False)
#         return JsonResponse(serializer.errors, status = status.HTTP_400_BAD_REQUEST, safe=False)
    
# class DeleteLists(APIView):
#     def delete(self, request, delete_list_id):
#         list = List.objects.get(list_id = delete_list_id)
#         list.delete()
#         return JsonResponse("Deleted List", safe=False)
    
# class GetListId(APIView):
#     def get(self, request, input_list_id):
#         list = List.objects.filter(list_id = input_list_id)
#         serialized = ListSerializer(list, many = True)
#         return JsonResponse(serialized.data, status = status.HTTP_200_OK, safe=False)

# #Optimize

# from rest_framework import generics, status
# from rest_framework.response import Response

# # Boards
# class BoardListCreateView(generics.ListCreateAPIView):
#     queryset = Board.objects.all()
#     serializer_class = BoardSerializer

# class BoardRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Board.objects.all()
#     serializer_class = BoardSerializer
#     lookup_field = 'board_id'

# # Users
# class UserListCreateView(generics.ListCreateAPIView):
#     queryset = User.objects.all()
#     serializer_class = UserSerializer

# class UserRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
#     queryset = User.objects.all()
#     serializer_class = UserSerializer
#     lookup_field = 'user_id'

# # Tasks
# class TaskListCreateView(generics.ListCreateAPIView):
#     queryset = Task.objects.all()
#     serializer_class = TaskSerializer

# class TaskRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Task.objects.all()
#     serializer_class = TaskSerializer
#     lookup_field = 'task_id'

# # Commits
# class CommitListCreateView(generics.ListCreateAPIView):
#     queryset = Commit.objects.all()
#     serializer_class = CommitSerializer

# class CommitRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Commit.objects.all()
#     serializer_class = CommitSerializer
#     lookup_field = 'commit_id'

# # Lists
# class ListListCreateView(generics.ListCreateAPIView):
#     queryset = List.objects.all()
#     serializer_class = ListSerializer

# class ListRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
#     queryset = List.objects.all()
#     serializer_class = ListSerializer
#     lookup_field = 'list_id'

from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import *
from rest_framework import status
from .models import *

# Create your views here
class GetData(APIView):
    def get(self, request, pk=None):
        pass
    
class PostData(APIView):
    def post(self, request, pk):
        pass

class PutData(APIView):
    def put(self, request, pk):
        pass
    
class DeleteData(APIView):
    def delete(self, request, pk):
        pass

class BoardTB(GetData, PostData, PutData, DeleteData):
    def get(self, request, pk=None):
        if pk == None:
            boards = Board.objects.all()
            serialized = BoardSerializer(boards, many=True)
            return JsonResponse(serialized.data, status = status.HTTP_200_OK, safe=False)
        try:
            boards = Board.objects.filter(board_id = pk)
            if boards.exists():
                serialized = BoardSerializer(boards, many = True)
                return JsonResponse(serialized.data, status = status.HTTP_200_OK,  safe=False)
            return JsonResponse(f"Board {pk} does not exist", status = status.HTTP_400_BAD_REQUEST, safe=False)
        except ValueError:
            return JsonResponse("board_id incorrect, Please enter correct key", status = status.HTTP_400_BAD_REQUEST, safe=False)
    
    def post(self, request):
        serialized = BoardSerializer(data = request.data)
        try:
            if serialized.is_valid() :
                serialized.save()
                return JsonResponse(serialized.data, status = status.HTTP_200_OK, safe=False)        
            return JsonResponse("Board already exists", status = status.HTTP_400_BAD_REQUEST, safe=False)
        except ValueError:
            return JsonResponse("Please enter a valid board_id", status = status.HTTP_400_BAD_REQUEST)
    
    def put(self, request, pk):
        boards = Board.objects.get(board_id = pk)
        serialized = BoardSerializer(boards, data = request.data)
        try:
            if serialized.is_valid():
                serialized.save()
                return JsonResponse(serialized.data, status = status.HTTP_200_OK, safe=False)  
            return JsonResponse("Board cannot be updated", status = status.HTTP_400_BAD_REQUEST)
        except ValueError:
            return JsonResponse("Please enter a valid board_id", status = status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, pk):
        boards = Board.objects.get(board_id = pk)
        boards.delete()
        return JsonResponse("Deleted Board", status = status.HTTP_200_OK, safe=False)

    

class UserTB(GetData, PostData, PutData, DeleteData):
    def get(self, request, pk=None):
        if pk == None:
            users = User.objects.all()  
            serialized = UserSerializer(users, many=True)
            return JsonResponse(serialized.data, status = status.HTTP_200_OK, safe=False)
        users = User.objects.filter(user_id = pk)
        serialized = UserSerializer(users, many = True)
        return JsonResponse(serialized.data, status = status.HTTP_200_OK,  safe=False)

    def post(self, request):
        serialized = UserSerializer(data = request.data)
        if serialized.is_valid() :
            serialized.save()
            return JsonResponse(serialized.data, status = status.HTTP_200_OK, safe=False)        
        return JsonResponse(serialized.errors, status = status.HTTP_400_BAD_REQUEST)
    
    def put(self, request, pk):
        users = User.objects.get(user_id = pk)
        serialized = UserSerializer(users, data = request.data)
        if serialized.is_valid():
            serialized.save()
            return JsonResponse(serialized.data, status = status.HTTP_200_OK, safe=False)
        return JsonResponse(serialized.errors, status = status.HTTP_400_BAD_REQUEST)
        
    def delete(self, request, pk):
        users = User.objects.get(user_id = pk)
        users.delete()
        return JsonResponse("Deleted User", status = status.HTTP_200_OK, safe=False)
    
class TaskTB(GetData, PostData, PutData, DeleteData):
    def get(self, request, pk=None):
        if pk == None:
            tasks = Task.objects.all()
            serialized = TaskSerializer(tasks, many=True)
            return JsonResponse(serialized.data, status = status.HTTP_200_OK, safe=False)
        tasks = Task.objects.filter(task_id = pk)
        serialized = TaskSerializer(tasks, many = True)
        return JsonResponse(serialized.data, status = status.HTTP_200_OK, safe=False)
    
    def post(self, request):
        serialized = TaskSerializer(data = request.data)
        if serialized.is_valid() :
            serialized.save()
            return JsonResponse(serialized.data, status = status.HTTP_200_OK, safe=False)        
        return JsonResponse(serialized.errors, status = status.HTTP_400_BAD_REQUEST)
    
    def put(self, request, pk):
        tasks = Task.objects.get(task_id = pk)
        serialized = TaskSerializer(tasks, data = request.data)
        if serialized.is_valid():
            serialized.save()
            return JsonResponse(serialized.data, status = status.HTTP_200_OK, safe=False)
        return JsonResponse(serialized.errors, status = status.HTTP_400_BAD_REQUEST)
        
    def delete(self, request, pk):
        tasks = Task.objects.get(task_id = pk)
        tasks.delete()
        return JsonResponse("Deleted Task", status = status.HTTP_200_OK, safe=False)
    
class ListTB(GetData, PostData, PutData, DeleteData):
    def get(self, request, pk=None):
        if pk == None:
            list = List.objects.all()
            serialized = ListSerializer(list, many=True)
            return JsonResponse(serialized.data, status = status.HTTP_200_OK, safe=False)
        list = List.objects.filter(column_id = pk)
        serialized = ListSerializer(list, many = True)
        return JsonResponse(serialized.data, status = status.HTTP_200_OK,  safe=False)
    
    def post(self, request):
        serialized = ListSerializer(data = request.data)
        if serialized.is_valid() :
            serialized.save()
            return JsonResponse(serialized.data, status = status.HTTP_200_OK)        
        return JsonResponse(serialized.errors, status = status.HTTP_400_BAD_REQUEST)
        
    def put(self, request, pk):
        list = List.objects.get(column_id = pk)
        serialized = ListSerializer(list, data = request.data)
        if serialized.is_valid():
            serialized.save()
            return JsonResponse(serialized.data, status = status.HTTP_200_OK, safe=False)
        return JsonResponse(serialized.errors, status = status.HTTP_400_BAD_REQUEST)
        
    def delete(self, request, pk):
        list = List.objects.get(column_id = pk)
        list.delete()
        return JsonResponse("Deleted List", status = status.HTTP_200_OK, safe=False)
    
class CommitTB(GetData, PostData, PutData, DeleteData):
    def get(self, request, pk=None):
        if pk==None:
            comment = Commit.objects.all()
            serialized = CommitSerializer(comment, many = True)
            return JsonResponse(serialized.data, status = status.HTTP_200_OK, safe = False)
        commits = Commit.objects.filter(committ_id = pk)
        serialized = CommitSerializer(commits, many = True)
        return JsonResponse(serialized.data, status = status.HTTP_200_OK,  safe=False)
    
    def post(self, request):
        serialized = CommitSerializer(data = request.data)
        if serialized.is_valid() :
            serialized.save()
            return JsonResponse(serialized.data, status = status.HTTP_200_OK)        
        return JsonResponse(serialized.errors, status = status.HTTP_400_BAD_REQUEST)
    
    def put(self, request, pk):
        commits = Commit.objects.get(committ_id = pk)
        serialized = CommitSerializer(commits, data = request.data)
        if serialized.is_valid():
            serialized.save()
            return JsonResponse(serialized.data, status = status.HTTP_200_OK)
        return JsonResponse(serialized.errors, status = status.HTTP_400_BAD_REQUEST)
        
    def delete(self, request, pk):
        commits = Commit.objects.get(committ_id = pk)
        commits.delete()
        return JsonResponse("Deleted Commit", status = status.HTTP_200_OK)
    

