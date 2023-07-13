from django.shortcuts import render
from rest_framework.decorators import api_view
from django.views.generic import View
from .serializers import *
from django.http import JsonResponse, JsonResponse
from .models import *
from rest_framework import status
from rest_framework.views import APIView
# Create your views here.

#Board
class GetBoard(APIView):
    def get(self, request):
        boards = Board.objects.all()
        serialized = BoardSerializer(boards, many=True)
        return JsonResponse(serialized.data, status = status.HTTP_200_OK, safe=False)
    
class PostBoard(APIView):
    def post(self, request):
        serializer = BoardSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status = status.HTTP_200_OK, safe=False)
        return JsonResponse(serializer.errors, status = status.HTTP_400_BAD_REQUEST, safe=False)

class PutBoard(APIView):
    def put(self, request, input_board_id):
        board = Board.objects.get(board_id = input_board_id)
        serializer = BoardSerializer(board, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status = status.HTTP_200_OK, safe=False)
        return JsonResponse(serializer.errors, status = status.HTTP_400_BAD_REQUEST, safe=False)
    
class DeleteBoard(APIView):
    def delete(self, request, delete_board_id):
        board = Board.objects.get(board_id = delete_board_id)
        board.delete()
        return JsonResponse("Deleted User", safe=False)
    
class GetBoardId(APIView):
    def get(self, request, input_board_id):
            board = Board.objects.filter(board_id = input_board_id)
            serialized = BoardSerializer(board, many = True)
            return JsonResponse(serialized.data, status = status.HTTP_200_OK, safe=False)
    
#User
class GetUsers(APIView):
    def get(self, request):
        users = User.objects.all()
        serialized = UserSerializer(users, many=True)
        return JsonResponse(serialized.data, status = status.HTTP_200_OK, safe=False)
    
class PostUsers(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status = status.HTTP_200_OK, safe=False)
        return JsonResponse(serializer.errors, status = status.HTTP_400_BAD_REQUEST, safe=False)
    
class UpdateUsers(APIView):
    def put(self, request, input_user_id):
        user = User.objects.get(user_id = input_user_id)
        serializer = UserSerializer(user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status = status.HTTP_200_OK, safe=False)
        return JsonResponse(serializer.errors, status = status.HTTP_400_BAD_REQUEST, safe=False)
    
class DeleteUsers(APIView):
    def delete(self, request, delete_user_id):
        user = User.objects.get(user_id = delete_user_id)
        user.delete()
        return JsonResponse("Deleted User", safe=False)
    
class GetUserId(APIView):
    def get(self, request, input_user_id):
        user = User.objects.filter(user_id = input_user_id)
        serialized = UserSerializer(user, many = True)
        return JsonResponse(serialized.data, status = status.HTTP_200_OK, safe=False)
    
# Tasks
class GetTasks(APIView):
    def get(self, request):
        tasks = Task.objects.all()
        serialized = TaskSerializer(tasks, many=True)
        return JsonResponse(serialized.data, status = status.HTTP_200_OK, safe=False)
    
class PostTasks(APIView):
    def post(self, request):
        serializer = TaskSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status = status.HTTP_200_OK, safe=False)
        return JsonResponse(serializer.errors, status = status.HTTP_400_BAD_REQUEST, safe=False)
    
class PutTasks(APIView):
    def put(self, request, input_task_id):
        task = Task.objects.get(task_id = input_task_id)
        serializer = TaskSerializer(task, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status = status.HTTP_200_OK, safe=False)
        return JsonResponse(serializer.errors, status = status.HTTP_400_BAD_REQUEST, safe=False)
    
class DeleteTasks(APIView):
    def delete(self, request, delete_task_id):
        task = Task.objects.get(task_id = delete_task_id)
        task.delete()
        return JsonResponse("Deleted Task", safe=False)
    
class GetTaskId(APIView):
    def get(self, request, input_task_id):
        task = Task.objects.filter(task_id = input_task_id)
        serialized = TaskSerializer(task, many = True)
        return JsonResponse(serialized.data, status = status.HTTP_200_OK, safe=False)
    
#Commits

class GetCommits(APIView):
    def get(self, request):
        commits = Commit.objects.all()
        serialized = CommitSerializer(commits, many=True)
        return JsonResponse(serialized.data, status = status.HTTP_200_OK, safe=False)
    
class PostCommits(APIView):
    def post(self, request):
        serializer = CommitSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status = status.HTTP_200_OK, safe=False)
        return JsonResponse(serializer.errors, status = status.HTTP_400_BAD_REQUEST, safe=False)
    
class PutCommits(APIView):
    def put(self, request, input_commit_id):
        commit = Commit.objects.get(commit_id = input_commit_id)
        serializer = CommitSerializer(commit, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status = status.HTTP_200_OK, safe=False)
        return JsonResponse(serializer.errors, status = status.HTTP_400_BAD_REQUEST, safe=False)
    
class DeleteCommits(APIView):
    def delete(self, request, delete_commit_id):
        commit = Commit.objects.get(commit_id = delete_commit_id)
        commit.delete()
        return JsonResponse("Deleted Commit", safe=False)
    
class GetCommitId(APIView):
    def get(self, request, input_commit_id):
        commit = Commit.objects.filter(commit_id = input_commit_id)
        serialized = CommitSerializer(commit, many = True)
        return JsonResponse(serialized.data, status = status.HTTP_200_OK, safe=False)

#Lists

class GetLists(APIView):
    def get(self, request):
        lists = List.objects.all()
        serialized = ListSerializer(lists, many=True)
        return JsonResponse(serialized.data, status = status.HTTP_200_OK, safe=False)
    
class PostLists(APIView):
    def post(self, request):
        serializer = ListSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status = status.HTTP_200_OK, safe=False)
        return JsonResponse(serializer.errors, status = status.HTTP_400_BAD_REQUEST, safe=False)

class PutLists(APIView):
    def put(self, request, input_list_id):
        list = List.objects.get(list_id = input_list_id)
        serializer = ListSerializer(list, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status = status.HTTP_200_OK, safe=False)
        return JsonResponse(serializer.errors, status = status.HTTP_400_BAD_REQUEST, safe=False)
    
class DeleteLists(APIView):
    def delete(self, request, delete_list_id):
        list = List.objects.get(list_id = delete_list_id)
        list.delete()
        return JsonResponse("Deleted List", safe=False)
    
class GetListId(APIView):
    def get(self, request, input_list_id):
        list = List.objects.filter(list_id = input_list_id)
        serialized = ListSerializer(list, many = True)
        return JsonResponse(serialized.data, status = status.HTTP_200_OK, safe=False)

#Optimize