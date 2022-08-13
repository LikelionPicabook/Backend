from django.db import models
from django.conf import settings

# Create your models here.
class Check_list(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    date = models.IntegerField()
    content = models.TextField()
    place = models.CharField(max_length=30)
    stufflist = models.CharField(max_length=10)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now= True)
    

class Stuff(models.Model):
    stuffname = models.CharField(max_length=10)
    check_id = models.ForeignKey(Check_list, on_delete=models.CASCADE)

class recommand(models.Model):
    place = models.CharField(max_length=30)
    plusstuff = models.CharField(max_length=30)


class PhotoBox(models.Model):
    # data type assign
    title = models.CharField(max_length=200) # 사진관 이름
    # 위도
    lat = models.DecimalField(max_digits=16, decimal_places=14)
    # 경도
    lon = models.DecimalField(max_digits=17, decimal_places=14)
    
    # # media 폴더 안에 blog_photo를 생성하여 그곳에서 관리하고 저장할 것이다.
    # photo = models.ImageField(blank=True, null=True, upload_to='blog_photo')

    def __str__(self):
        return self.title

