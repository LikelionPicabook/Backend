from django.urls import path, re_path
from . import views

app_name = 'checks'

urlpatterns = [
    path('', views.check_list),
    path('create/', views.create_check),
    path('<int:check_pk>', views.check_detail),
    # path('photo/', views.search_photobox),
    path('photo/', views.Search_Keyword.as_view()),
    # re_path(r'^search?keyword=(?P<keyword>)/$' , views.search_keyword),
    # path('<str:keyword>' , views.search_keyword),

]