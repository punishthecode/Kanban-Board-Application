from rest_framework.response import Response
from rest_framework import status
from rest_framework import generics
from .models import *
from .serializers import *
from rest_framework.views import APIView
from django.contrib.auth.hashers import make_password, check_password
from django.contrib.auth import authenticate

# Base class to define the generic methods which will be inherited by each table 
# SOLID Principles and restful methods satisfied
class CrudOperationsView(generics.GenericAPIView):
    queryset = None
    serializer_class = None

    # HTTP get method
    def get(self, request, pk=None):
        try:
            if pk is None:
                objects = self.get_queryset()
                serializer = self.get_serializer(objects, many=True)
            else:
                obj = self.get_queryset().get(pk=pk)
                serializer = self.get_serializer(obj)
            return Response(serializer.data)
        except self.queryset.model.DoesNotExist:
            return Response(f"{self.queryset.model.__name__} {pk} does not exist", status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response(str(e), status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    # HTTP post method
    def post(self, request):
        try:
            serializer = self.get_serializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response(str(e), status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    # HTTP put method
    def put(self, request, pk):
        try:
            obj = self.get_queryset().get(pk=pk)
            serializer = self.get_serializer(obj, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except self.queryset.model.DoesNotExist:
            return Response(f"{self.queryset.model.__name__} {pk} does not exist", status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response(str(e), status=status.HTTP_500_INTERNAL_SERVER_ERROR)


    # HTTP delete method
    def delete(self, request, pk):
        try:
            obj = self.get_queryset().get(pk=pk)
            obj.delete()
            return Response("Deleted", status=status.HTTP_200_OK)
        except self.queryset.model.DoesNotExist:
            return Response(f"{self.queryset.model.__name__} {pk} does not exist", status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response(str(e), status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
    # HTTP patch method    
    def patch(self, request, pk):
        try:
            obj = self.get_queryset().get(pk=pk)
            serializer = self.get_serializer(obj, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except self.queryset.model.DoesNotExist:
            return Response(f"{self.queryset.model.__name__} {pk} does not exist", status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response(str(e), status=status.HTTP_500_INTERNAL_SERVER_ERROR)   


# User CRUD operations.
class UserView(CrudOperationsView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

# Task CRUD operations.
class TaskView(CrudOperationsView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

# List CRUD operations.
class ListView(CrudOperationsView):
    queryset = List.objects.all()
    serializer_class = ListSerializer

# Board CRUD operations.
# class BoardView(CrudOperationsView):
#     queryset = Board.objects.all()
#     serializer_class = BoardSerializer

# Commit CRUD operations.
# class CommitView(CrudOperationsView):
#     queryset = Commit.objects.all()
#     serializer_class = CommitSerializer

class LoginAPIView(APIView):
    def post(self, request):
        username = request.data.get('username')
        pass_field = request.data.get('pass_field')

        try:
            user = User.objects.get(username=username)
        except User.DoesNotExist:
            return Response("Invalid username or password", status=status.HTTP_401_UNAUTHORIZED)

        result = check_password(pass_field, user.pass_field)
        if result:  
            data = {
                'username': user.username,
                'message': 'Login successful',
            }
            return Response(data, status=status.HTTP_200_OK)
        else:
            return Response("Invalid username or password", status=status.HTTP_401_UNAUTHORIZED)

class SignupAPIView(APIView):
    def post(self, request):
        username = request.data.get('username')
        pass_field = request.data.get('pass_field')
        email = request.data.get('email')

        try:
            user = User.objects.get(username=username)
            return Response("Username already exists", status=status.HTTP_409_CONFLICT)
        except User.DoesNotExist:
            hashed_password = make_password(pass_field)
            user = User.objects.create(username=username, pass_field=hashed_password, email=email)
            user.save()
            data = {
                'username': user.username,
                'message': 'Signup successful',
            }
            return Response(data, status=status.HTTP_201_CREATED)
