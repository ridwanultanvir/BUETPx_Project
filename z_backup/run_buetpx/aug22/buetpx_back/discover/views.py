from unicodedata import category
# from bs4 import Tag
from django.shortcuts import render
from django.http.response import JsonResponse
from django.db.models import Q
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
def get_post_by_categoryname(request,name):
    
    if request.method == 'GET':
        posts = Post.objects.filter(category=name)               
        post_serializer = PostSerializer(posts,many = True)
        return JsonResponse(post_serializer.data, safe=False)
    
@api_view(['GET'])
def get_newest_posts(request,keyword):
    
    if request.method == 'GET':
        # get newest 100 posts
        
        
        # posts = Post.objects.values_list('id','post_title','post_date','category').order_by('-post_date')[:100]
        posts = Post.objects.all().order_by('-post_date')

        # return just title, post_date and description
        
        post_serializer = PostSerializer(posts,many = True)
        return JsonResponse(post_serializer.data, safe=False)


@api_view(['GET','POST'])
def get_categories(request):

    if request.method == 'GET':
        categories = Category.objects.all()

        # Category.objects.raw("SQL_QUERY")
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



# get search result
@api_view(['GET'])
def get_search_result(request,list):
    
    # "option&searchkey"
    my_list = list.split("&")
    option = my_list[0]
    keyword = my_list[1]
    # convert to lower case
    option = option.lower()
    keyword = keyword.lower()
    
    
    print(keyword)
    sortoption = ""
    print(len(my_list))
    if len(my_list) > 2:
        
        sortoption = my_list[2]
    
    print("sortoption:", sortoption)
    
    
    # id = Place.objects.only('id').get(name='Azimpur').id
    # print("id: ",id)
    
    # get posts by place id
    if option == 'location':
        # if name contains keyword

        name_filter = Q(name__iexact=keyword)
        location = Place.objects.filter(name_filter)
        
        # print loc type
        print(type(location))
        if len(location) == 0:
            return JsonResponse({"message":"No result found"}, status=status.HTTP_404_NOT_FOUND)
       
        # get id of location
        id = location[0].id
        print("location_id: ")
        print(id)
        posts = Post.objects.filter(place=id)
    elif option == 'photographer':
        # name_filter = Q(name__iexact=keyword)
        # photographer = UserAccount.objects.filter(name=keyword)
        # search by name if name contains keyword

        name_filter = Q(name__icontains=keyword)
        photographer = UserAccount.objects.filter(name_filter)
        # photographer = UserAccount.objects.filter(name__iexact=keyword,__name__icontains=keyword)
        # print loc type
        print(type(photographer))
        if len(photographer) == 0:
            return JsonResponse({"message":"No result found"}, status=status.HTTP_404_NOT_FOUND)
        # get id of location
        pid = photographer[0].id
        print("photographer: ")
        print(pid)
        posts = Post.objects.filter(owner=pid)

    elif option == 'tag':
        
        posts = Post.objects.filter(tags__name=keyword)


    # print("posts: ",posts)/
    if sortoption == "newest":
        posts = posts.order_by('-post_date')
        print("sorted")
        
    post_serializer = PostSerializer(posts, many=True)
    return JsonResponse(post_serializer.data, safe=False)
    


# id = Place.objects.only('id').get(name='Azimpur').id
            # print("id: ",id)