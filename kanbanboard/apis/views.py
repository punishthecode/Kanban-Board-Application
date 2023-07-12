from django.shortcuts import render
from rest_framework.decorators import api_view
from django.views.generic import View
from .serializers import *
from django.http import JsonResponse
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
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors)

class PutBoard(APIView):
    def put(self, request, input_board_id):
        board = Board.objects.get(board_id = input_board_id)
        serializer = BoardSerializer(board, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors)
    
class DeleteBoard(APIView):
    def delete(self, request, delete_board_id):
        board = Board.objects.get(board_id = delete_board_id)
        board.delete()
        return JsonResponse("Deleted Board", safe=False)
    
class GetBoardId(APIView):
    def get(self, request, input_board_id):
        board = Board.objects.get(board_id = input_board_id)
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
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors)
    
class UpdateUsers(APIView):
    def put(self, request, input_user_id):
        user = User.objects.get(user_id = input_user_id)
        serializer = UserSerializer(user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors)
    
class DeleteUsers(APIView):
    def delete(self, request, delete_user_id):
        user = User.objects.get(user_id = delete_user_id)
        user.delete()
        return JsonResponse("Deleted User", safe=False)
    
# Implement remaining tables using the same methods!