from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import *
from rest_framework import status
from .models import *

#Database name: kanban_board_v1
# Abstract classes for CRUD operations.
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

# Board CRUD operations - Not used.
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

    
# User CRUD operations.
class UserTB(GetData, PostData, PutData, DeleteData):
    def get(self, request, pk=None):
        if pk == None:
            users = User.objects.all()  
            serialized = UserSerializer(users, many=True)
            return JsonResponse(serialized.data, status = status.HTTP_200_OK, safe=False)
        try:
            users = User.objects.filter(user_id = pk)
            if users.exists():
                serialized = UserSerializer(users, many = True)
                return JsonResponse(serialized.data, status = status.HTTP_200_OK,  safe=False)
            return JsonResponse(f"User {pk} does not exist", status = status.HTTP_400_BAD_REQUEST, safe=False)
        except ValueError:
            return JsonResponse("user_id incorrect, Please enter correct key", status = status.HTTP_400_BAD_REQUEST, safe=False)
        

    def post(self, request):
        serialized = UserSerializer(data = request.data)
        try:
            if serialized.is_valid() :
                serialized.save()
                return JsonResponse(serialized.data, status = status.HTTP_200_OK, safe=False)        
            return JsonResponse("User already exists", status = status.HTTP_400_BAD_REQUEST, safe=False)
        except ValueError:
            return JsonResponse("Please enter a valid user_id", status = status.HTTP_400_BAD_REQUEST)
    
    def put(self, request, pk):
        users = User.objects.get(user_id = pk)
        serialized = UserSerializer(users, data = request.data)
        try:
            if serialized.is_valid():
                serialized.save()
                return JsonResponse(serialized.data, status = status.HTTP_200_OK, safe=False)  
            return JsonResponse("User cannot be updated", status = status.HTTP_400_BAD_REQUEST)
        except ValueError:
            return JsonResponse("Please enter a valid user_id", status = status.HTTP_400_BAD_REQUEST)
        
    def delete(self, request, pk):
        users = User.objects.get(user_id = pk)
        users.delete()
        return JsonResponse("Deleted User", status = status.HTTP_200_OK, safe=False)

# Task CRUD operations.
class TaskTB(GetData, PostData, PutData, DeleteData):
    def get(self, request, pk=None):
        if pk == None:
            tasks = Task.objects.all()
            serialized = TaskSerializer(tasks, many=True)
            return JsonResponse(serialized.data, status = status.HTTP_200_OK, safe=False)
        try:
            tasks = Task.objects.filter(task_id = pk)
            if tasks.exists():
                serialized = TaskSerializer(tasks, many = True)
                return JsonResponse(serialized.data, status = status.HTTP_200_OK,  safe=False)
            return JsonResponse(f"Task {pk} does not exist", status = status.HTTP_400_BAD_REQUEST, safe=False)
        except ValueError:
            return JsonResponse("task_id incorrect, Please enter correct key", status = status.HTTP_400_BAD_REQUEST, safe=False)
    
    def post(self, request):
        serialized = TaskSerializer(data = request.data)
        try:
            if serialized.is_valid() :
                serialized.save()
                return JsonResponse(serialized.data, status = status.HTTP_200_OK, safe=False)        
            return JsonResponse("Task already exists", status = status.HTTP_400_BAD_REQUEST, safe=False)
        except ValueError:
            return JsonResponse("Please enter a valid task_id", status = status.HTTP_400_BAD_REQUEST)
    
    def put(self, request, pk):
        tasks = Task.objects.get(task_id = pk)
        serialized = TaskSerializer(tasks, data = request.data)
        try:
            if serialized.is_valid():
                serialized.save()
                return JsonResponse(serialized.data, status = status.HTTP_200_OK, safe=False)  
            return JsonResponse("Task cannot be updated", status = status.HTTP_400_BAD_REQUEST)
        except ValueError:
            return JsonResponse("Please enter a valid task_id", status = status.HTTP_400_BAD_REQUEST)
        
    def delete(self, request, pk):
        tasks = Task.objects.get(task_id = pk)
        tasks.delete()
        return JsonResponse("Deleted Task", status = status.HTTP_200_OK, safe=False)
    
# List CRUD operations.   
class ListTB(GetData, PostData, PutData, DeleteData):
    def get(self, request, pk=None):
        if pk == None:
            list = List.objects.all()
            serialized = ListSerializer(list, many=True)
            return JsonResponse(serialized.data, status = status.HTTP_200_OK, safe=False)
        try:
            list = List.objects.filter(column_id = pk)
            if list.exists():
                serialized = ListSerializer(list, many = True)
                return JsonResponse(serialized.data, status = status.HTTP_200_OK,  safe=False)
            return JsonResponse(f"List {pk} does not exist", status = status.HTTP_400_BAD_REQUEST, safe=False)
        except ValueError:
            return JsonResponse("column_id incorrect, Please enter correct key", status = status.HTTP_400_BAD_REQUEST, safe=False)
    
    def post(self, request):
        serialized = ListSerializer(data = request.data)
        try:
            if serialized.is_valid() :
                serialized.save()
                return JsonResponse(serialized.data, status = status.HTTP_200_OK, safe=False)        
            return JsonResponse("List already exists", status = status.HTTP_400_BAD_REQUEST, safe=False)
        except ValueError:
            return JsonResponse("Please enter a valid column_id", status = status.HTTP_400_BAD_REQUEST)
        
    def put(self, request, pk):
        list = List.objects.get(column_id = pk)
        serialized = ListSerializer(list, data = request.data)
        try:
            if serialized.is_valid():
                serialized.save()
                return JsonResponse(serialized.data, status = status.HTTP_200_OK, safe=False)  
            return JsonResponse("List cannot be updated", status = status.HTTP_400_BAD_REQUEST)
        except ValueError:
            return JsonResponse("Please enter a valid column_id", status = status.HTTP_400_BAD_REQUEST)
        
    def delete(self, request, pk):
        list = List.objects.get(column_id = pk)
        list.delete()
        return JsonResponse("Deleted List", status = status.HTTP_200_OK, safe=False)

# Commit CRUD operations.
class CommitTB(GetData, PostData, PutData, DeleteData):
    def get(self, request, pk=None):
        if pk==None:
            comment = Commit.objects.all()
            serialized = CommitSerializer(comment, many = True)
            return JsonResponse(serialized.data, status = status.HTTP_200_OK, safe = False)
        try:
            comment = Commit.objects.filter(committ_id = pk)
            if comment.exists():
                serialized = CommitSerializer(comment, many = True)
                return JsonResponse(serialized.data, status = status.HTTP_200_OK, safe = False)
            return JsonResponse(f"Comment {pk} does not exist", status = status.HTTP_400_BAD_REQUEST, safe = False)
        except ValueError:
            return JsonResponse("committ_id incorrect, Please enter correct key", status = status.HTTP_400_BAD_REQUEST, safe = False)
    
    def post(self, request):
        serialized = CommitSerializer(data = request.data)
        try:
            if serialized.is_valid() :
                serialized.save()
                return JsonResponse(serialized.data, status = status.HTTP_200_OK)        
            return JsonResponse("Comment already exists", status = status.HTTP_400_BAD_REQUEST)
        except ValueError:
            return JsonResponse("Please enter a valid committ_id", status = status.HTTP_400_BAD_REQUEST)
    
    def put(self, request, pk):
        commits = Commit.objects.get(committ_id = pk)
        serialized = CommitSerializer(commits, data = request.data)
        try:
            if serialized.is_valid():
                serialized.save()
                return JsonResponse(serialized.data, status = status.HTTP_200_OK)  
            return JsonResponse("Comment cannot be updated", status = status.HTTP_400_BAD_REQUEST)
        except ValueError:
            return JsonResponse("Please enter a valid committ_id", status = status.HTTP_400_BAD_REQUEST)
        
    def delete(self, request, pk):
        commits = Commit.objects.get(committ_id = pk)
        commits.delete()
        return JsonResponse("Deleted Commit", status = status.HTTP_200_OK)
    

