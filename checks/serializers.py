from rest_framework import serializers
from .models import Check_list, PhotoBox

class CheckListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Check_list
        fields = ['id', 'content', 'place', 'stufflist']

class CheckSerializer(serializers.ModelSerializer):
    class Meta:
        model = '__all__'

# 포토박스 시리얼라이저, api에 보여줄 필드 명시
class PhotoBoxSerializer(serializers.ModelSerializer):
    class Meta:
        photoBox = PhotoBox
        fields = '__all__'




