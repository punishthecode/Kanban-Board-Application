from django.shortcuts import render
from rest_framework.decorators import api_view
from django.views.generic import View
from .serializers import BoardSerializer
from django.http import JsonResponse
from .models import Board

# Create your views here.

class GetBoard(View):
    def get(self, request):
        boards = Board.objects.all()
        serialized = BoardSerializer(boards, many=True)
        return JsonResponse(serialized.data, safe=False)
    
class GetBoardId(View):
    def get(self, request, board_id):
        board = Board.objects.filter(board_id=board_id)
        serialized = BoardSerializer(board, data = request.data)
        return JsonResponse(serialized.data, safe=False)