from django.shortcuts import render

from django.shortcuts import get_object_or_404
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.filters import SearchFilter
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializers import CheckListSerializer, CheckSerializer, PhotoBoxSerializer
from .models import Check_list,PhotoBox

@api_view(['GET'])
def check_list(request):
    checks = Check_list.objects.all()
    serializer = CheckListSerializer(checks, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def check_detail(request, check_pk):
    check = get_object_or_404(Check_list, pk=check_pk)
    serializer = CheckSerializer(check)
    return Response(serializer.data)

@api_view(['POST'])
def create_check(request):
    serializer = CheckSerializer(data=request.data)
    if serializer.is_valid(raise_exception=True):
        serializer.save()
        return Response(serializer.data)

# @api_view(['GET'])
# def search_photobox(request):
#     photoBoxs = PhotoBox.objects.all()
#     serializer = PhotoBoxSerializer(photoBoxs, many = True)

#     return Response(serializer.data)

# @api_view(['GET'])
# def search_keyword(request, keyword):

#     # keyword = self.kwargs.data['value']
#     # keyword = "포토이즘"
#     print(keyword)
#     photoBox = PhotoBox.objects.all()
#     photoBox = photoBox.filter(photoBox__title=keyword)
#     serializer = PhotoBoxSerializer(photoBox, many = True)

#     return Response(serializer.data)

class Search_Keyword(APIView):
    def get(self, request):
        photoBoxs = PhotoBox.objects.all()
        serializer = PhotoBoxSerializer(photoBoxs, many = True)

        return Response(serializer.data)

    def post(self, request):
        photoBoxs = PhotoBox.objects.all()
        photoBoxs = photoBoxs.filter(title__icontains = request.data)    
        serializer = PhotoBoxSerializer(photoBoxs, many = True)

        return Response(serializer.data)
        


# class MemberList(APIView):
#     def get(self, request):
#         members = Member.objects.all()
#         serializer = MemberSerializer(members, many = True)
#         return Response(serializer.data)
    
#     def post(self, request):
#         serializer = MemberSerializer(data = request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status = status.HTTP_201_CREATED)
#         return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
    


