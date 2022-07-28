from unicodedata import category
# from bs4 import Tag
from django.shortcuts import render
from django.http.response import JsonResponse
# from Backend.buetpx_back.buetpx.models import Place
from rest_framework.parsers import JSONParser 
from rest_framework import status


from buetpx.models import Tutorial,Post,Comment,UserAccount,Tags, Category,Place
from buetpx.serializers import CommentSerializer, CommentSerializer2, TutorialSerializer,PostSerializer,PlaceSerializer,UserAccountSerializer,CategorySerializer
from buetpx.serializers import PostSerializer2
from rest_framework.decorators import api_view





@api_view(['GET', 'POST'])
def post_list_by_catname(request, catname):
       
# Retrieve objects (with condition)

    if request.method == 'GET':
        posts = Post.objects.all()
        # get posts by category name
        posts = posts.filter(category__name=catname)
        
        post_serializer = PostSerializer(posts, many=True)
        return JsonResponse(post_serializer.data, safe=False)



def get_post_by_categoryid(request,id):
    
    if request.method == 'GET':
        posts = Post.objects.filter(category=id)               
        post_serializer = PostSerializer(posts,many = True)
        return JsonResponse(post_serializer.data, safe=False)


@api_view(['GET'])
def get_post_by_categories(request,list):
    if request.method == 'GET':
        # get posts by category list
        list = list.split(',')
        posts = Post.objects.filter(category__name='')

        # filter posts by category names
        for catname in list:
            # add every post to posts
            posts = posts | Post.objects.filter(category__name=catname)



        post_serializer = PostSerializer(posts, many=True)
        return JsonResponse(post_serializer.data, safe=False)

@api_view(['Get'])

def get_post_by_categorylist(request,list):
    
    my_list = list.split(",")

    post_serializer_all = []
    if request.method == 'GET':
        for list_id in my_list:
         
            posts = Post.objects.filter(category=list_id) 
                          
            post_serializer = PostSerializer(posts,many = True)
       
            post_serializer_all.append(post_serializer.data)
            
        return JsonResponse(post_serializer_all, safe=False)


@api_view(['Get'])
def get_post_by_categoryname(request,name):
    
    if request.method == 'GET':
        posts = Post.objects.filter(category=name)               
        post_serializer = PostSerializer(posts,many = True)
        return JsonResponse(post_serializer.data, safe=False)
    
@api_view(['GET'])
def get_newest_posts(request):
    
    if request.method == 'GET':
        # get newest 100 posts
        
        # posts = Post.objects.values_list('id','post_title','post_date','category').order_by('-post_date')[:100]
        posts = Post.objects.all().order_by('-post_date')[:10]
        # return just title, post_date and description
        
        post_serializer = PostSerializer(posts,many = True)
        return JsonResponse(post_serializer.data, safe=False)


@api_view(['GET','POST'])
def get_categories(request):

    if request.method == 'GET':
        categories = Category.objects.all()
        categories_serializer = CategorySerializer(categories, many=True)
        return JsonResponse(categories_serializer.data, safe=False)

    elif request.method == 'POST':
        cat_data = JSONParser().parse(request)
        cat_serializer = CategorySerializer(data=cat_data)

        if cat_serializer.is_valid():
             cat_serializer.save()
             return JsonResponse(cat_serializer.data, status=status.HTTP_201_CREATED) 
        return JsonResponse(cat_serializer.errors, status=status.HTTP_400_BAD_REQUEST)



# get user by id
@api_view(['GET', 'POST'])
def get_user_by_id(request,id):
   
# Retrieve objects (with condition)

    if request.method == 'GET':
        user = UserAccount.objects.get(pk = id)
        user_serializer = UserAccountSerializer(user)
        return JsonResponse(user_serializer.data, safe=False)

# get_post_with_uid_by_id



