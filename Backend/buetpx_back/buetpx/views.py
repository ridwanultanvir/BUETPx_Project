from django.shortcuts import render
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status
 
from buetpx.models import Tutorial,Post,Comment,UserAccount,Tags, Category
from buetpx.serializers import CommentSerializer, CommentSerializer2, TutorialSerializer,PostSerializer,PlaceSerializer,UserAccountSerializer,CategorySerializer
from buetpx.serializers import PostSerializer2
from rest_framework.decorators import api_view



@api_view(['GET', 'POST', 'DELETE'])
def tutorial_list(request):
   
# Retrieve objects (with condition)

    if request.method == 'GET':
        tutorials = Tutorial.objects.all()
        
        title = request.GET.get('title', None)
        if title is not None:
            tutorials = tutorials.filter(title__icontains=title)
        
        tutorials_serializer = TutorialSerializer(tutorials, many=True)
        return JsonResponse(tutorials_serializer.data, safe=False)

# Create a new object

    elif request.method == 'POST':
        tutorial_data = JSONParser().parse(request)
        tutorial_serializer = TutorialSerializer(data=tutorial_data)

        if tutorial_serializer.is_valid():
             tutorial_serializer.save()
             return JsonResponse(tutorial_serializer.data, status=status.HTTP_201_CREATED) 
        return JsonResponse(tutorial_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


    # GET list of tutorials, POST a new tutorial, DELETE all tutorials
 
 
# 
@api_view(['GET', 'PUT', 'DELETE'])
def tutorial_detail(request, pk):
    # find tutorial by pk (id)
    try: 
        tutorial = Tutorial.objects.get(pk=pk) 

        if request.method == 'GET': 
            tutorial_serializer = TutorialSerializer(tutorial) 
            return JsonResponse(tutorial_serializer.data)
        
        elif request.method == 'PUT': 
            tutorial_data = JSONParser().parse(request) 
            tutorial_serializer = TutorialSerializer(tutorial, data=tutorial_data) 
            if tutorial_serializer.is_valid(): 
                tutorial_serializer.save() 
                return JsonResponse(tutorial_serializer.data) 
            return JsonResponse(tutorial_serializer.errors, status=status.HTTP_400_BAD_REQUEST) 

        elif request.method == 'DELETE': 
            tutorial.delete() 
            return JsonResponse({'message': 'Tutorial was deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)
   
    except Tutorial.DoesNotExist: 
        return JsonResponse({'message': 'The tutorial does not exist'}, status=status.HTTP_404_NOT_FOUND) 
 
    # GET / PUT / DELETE tutorial
    
        
@api_view(['GET'])
def tutorial_list_published(request):
    # GET all published tutorials
    tutorials = Tutorial.objects.filter(published=True)
        
    if request.method == 'GET': 
        tutorials_serializer = TutorialSerializer(tutorials, many=True)
        return JsonResponse(tutorials_serializer.data, safe=False)



@api_view(['GET'])
def post_detail(request):
    # GET all published tutorials
    # fields = ('id','post_title','post_date','photo_url')
    posts = Post.objects.values('id','post_title','post_date','photo_url')
    
    if request.method == 'GET': 
        posts_serializer = PostSerializer2(posts, many=True)
        return JsonResponse(posts_serializer.data, safe=False)
        
  

@api_view(['GET', 'POST'])
def post_list(request):
   
# Retrieve objects (with condition)

    if request.method == 'GET':
        posts = Post.objects.all()
        
        title = request.GET.get('post_title', None)
        if title is not None:
            posts = posts.filter(title__icontains=title)
        
        post_serializer = PostSerializer(posts, many=True)
        return JsonResponse(post_serializer.data, safe=False)

# # Create a new object

    elif request.method == 'POST':
        post_data = JSONParser().parse(request)
        post_serializer = PostSerializer(data=post_data)

        if post_serializer.is_valid():
             post_serializer.save()
             return JsonResponse(post_serializer.data, status=status.HTTP_201_CREATED) 
        return JsonResponse(post_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# categroy; .. ; comment_list 


@api_view(['Get'])
def get_post_by_id(request,id):
    
    if request.method == 'GET':
        post = Post.objects.get(pk=id)       
        singe_post_serializer = PostSerializer(post, context={'fields': ['id',
                'post_title',
                'photo_url',
                'place',
                'category',
                'tags']})
        return JsonResponse(singe_post_serializer.data, safe=False)



@api_view(['Get'])

def get_comments_by_postid(request,postid):
    
    if request.method == 'GET':
        comments = Comment.objects.filter(post=postid)               
        comment_serializer = CommentSerializer(comments,many = True)
        return JsonResponse(comment_serializer.data, safe=False)


# @api_view(['Get'])
# def get_comment_by_post_id(request,id):

#     # tutorials = Tutorial.objects.filter(published=True)
        
#     # if request.method == 'GET': 
#     #     tutorials_serializer = TutorialSerializer(tutorials, many=True)
#     #     return JsonResponse(tutorials_serializer.data, safe=False)
#     comments = Comment.objects.filter(post=id)  
#     if request.method == 'GET':
#         comment_serializer = CommentSerializer3(comments, many = True)
#         return JsonResponse(comment_serializer.data, safe=False)



    

#     # GET list of tutorials, POST a new tutorial, DELETE all tutorials
 

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





# get user by id
@api_view(['GET', 'POST'])
def get_all_user(request):
   
# Retrieve objects (with condition)

        
        # id = request.GET.get('id', None)
        
        
        user = UserAccount.objects.all()
        user_serializer = UserAccountSerializer(user, many=True)
        return JsonResponse(user_serializer.data, safe=False)