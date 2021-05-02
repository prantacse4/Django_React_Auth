from django.shortcuts import render
# from rest_framework_simplejwt.views import TokenObtainPairView
# from rest_framework import permissions
# from .serializers import MyTokenObtainPairSerializer
# from rest_framework_simplejwt.views import TokenObtainPairView
# from rest_framework import status, permissions
# from rest_framework.response import Response
# from rest_framework.views import APIView
# from .serializers import MyTokenObtainPairSerializer, CustomUserSerializer
# from rest_framework.permissions import IsAuthenticated
# from .models import CustomUser
# import operator

# # Create your views here.

def index(request):
    diction={}
    return render(request, 'user/index.html', context=diction)

def frontend(request):
    return render(request, 'index.html');

def wrong_url(request):
    return render(request, 'user/wrong_url.html');


# class ObtainTokenPairWithColorView(TokenObtainPairView):
#     permission_classes = (permissions.AllowAny,)
#     serializer_class = MyTokenObtainPairSerializer

# class ObtainTokenPairWithColorView(TokenObtainPairView):
#     serializer_class = MyTokenObtainPairSerializer


# class CustomUserCreate(APIView):
#     permission_classes = (permissions.AllowAny,)
#     authentication_classes = ()
#     def post(self, request, format='json'):
#         serializer = CustomUserSerializer(data=request.data)
#         if serializer.is_valid():
#             user = serializer.save()
#             if user:
#                 json = serializer.data
#                 return Response(json, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# class UserView(APIView):
#     permission_classes = (permissions.IsAuthenticated,)
#     # authentication_classes = (MyTokenObtainPairSerializer,)
#     def get(self, request):
#         try:
#             user = CustomUser.objects.get(email=request.user)
#             status_code = status.HTTP_200_OK
#             response = user
        
#         except Exception as Ex:
#             status_code = status.HTTP_400_BAD_REQUEST
#             response = {
#                 "error": str(Ex),
#             }
        
#         return Response(response, status=status_code)


# class HelloWorldView(APIView):

#     def get(self, request):
#         return Response(data={"hello":"world"}, status=status.HTTP_200_OK)