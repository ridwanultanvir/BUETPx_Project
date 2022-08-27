from unicodedata import category
from django.shortcuts import render
from django.http.response import JsonResponse
# from Backend.buetpx_back.buetpx.models import Place
from rest_framework.parsers import JSONParser 
from rest_framework import status
from rest_framework.decorators import api_view

from buetpx.models import Tutorial,Post,Comment,UserAccount,Tags, Category,Place, Like
from buetpx.serializers import LikeSerializer,CommentSerializer, CommentSerializer2, TutorialSerializer,PostSerializer

import json

from quest.models import Quest, Submission

from quest.serializers import SubmissionPostSerializer, QuestInsertSerializer, SubmissionInsertSerializer, PostLikeSerializer





# notun add korsi 
from django.db.models.query import QuerySet
from django.http import HttpResponse


@api_view(['GET'])
def quest_by_id(request,id):
    if request.method == 'GET':
        quest = Quest.objects.get(id=id)
        quest_serializer = QuestInsertSerializer(quest)
        return JsonResponse(quest_serializer.data, safe=False)


@api_view(['POST'])
def insert_quest(request):
    print("insert_quest:")
    if request.method == 'POST':
        
        
        
        quest_data = JSONParser().parse(request)
        print("quest_data:",quest_data)
        quest_serializer = QuestInsertSerializer(data=quest_data)

        if quest_serializer.is_valid():
                quest_serializer.save()
                return JsonResponse(quest_serializer.data, status=status.HTTP_201_CREATED) 
        return JsonResponse(quest_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    
@api_view(['POST'])
def insert_submission(request):
    print("insert_quest:")
    if request.method == 'POST':
        
        
        
        submission_data = JSONParser().parse(request)
        print("submission_data:",submission_data)
        submssion_serializer = SubmissionInsertSerializer(data=submission_data)

        if submssion_serializer.is_valid():
                submssion_serializer.save()
                return JsonResponse(submssion_serializer.data, status=status.HTTP_201_CREATED) 
        return JsonResponse(submssion_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

@api_view(['GET'])
def get_submission_by_questid(request,id):
    if request.method == 'GET':
        submissions = Submission.objects.filter(quest=id)               
        submission_serializer = SubmissionPostSerializer(submissions,many = True)
        return JsonResponse(submission_serializer.data, safe=False)

@api_view(['Get'])

def get_active_quests(request):
    
    if request.method == 'GET':
        # case insensitive filter
        
        active_quest = Quest.objects.filter(status__iexact='active')              
        # active_quest = Quest.objects.filter(status="Active")               
        active_quest_serializer = QuestInsertSerializer(active_quest,many = True)
        return JsonResponse(active_quest_serializer.data, safe=False)

@api_view(['Get'])
def get_ended_quests(request):
    
    if request.method == 'GET':
        ended_quest = Quest.objects.filter(status="Ended")               
        ended_quest_serializer = QuestInsertSerializer(ended_quest,many = True)
        return JsonResponse(ended_quest_serializer.data, safe=False)
    
@api_view(['Get'])

def get_all_quests(request):
    
    if request.method == 'GET':
        all_quest = Quest.objects.all()           
        all_quest_serializer = QuestInsertSerializer(all_quest,many = True)
        return JsonResponse(all_quest_serializer.data, safe=False)
    

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
 

# @api_view(['PUT'])

# def update_quest_status(request, id ):
#     if request.method == 'GET':
#         all_quest = Quest.objects.filter(id=id)            
#         all_quest_serializer = QuestInsertSerializer(all_quest,many = True)
#         return JsonResponse(all_quest_serializer.data, safe=False)
    
#     if request.method == 'PUT': 
#             tutorial_data = JSONParser().parse(request) 
#             tutorial_serializer = TutorialSerializer(tutorial, data=tutorial_data) 
#             if tutorial_serializer.is_valid(): 
#                 tutorial_serializer.save() 
#                 return JsonResponse(tutorial_serializer.data) 
#             return JsonResponse(tutorial_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    
    
@api_view(['GET'])

def get_posts_by_userid(request,id):
    
    if request.method == 'GET':
 
        posts = Post.objects.filter(owner_id = id)    
        post_serializer = PostLikeSerializer(posts,many = True)
        return JsonResponse(post_serializer.data, safe=False)
    
    
@api_view(['Get'])

def get_posts_all_data(request):
    
    if request.method == 'GET':
 
        posts = Post.objects.all()
        post_serializer = PostLikeSerializer(posts,many = True)
        return JsonResponse(post_serializer.data, safe=False)