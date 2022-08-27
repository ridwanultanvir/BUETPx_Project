from unicodedata import category
from django.shortcuts import render
from django.http.response import JsonResponse
# from Backend.buetpx_back.buetpx.models import Place
from rest_framework.parsers import JSONParser 
from rest_framework import status
from rest_framework.decorators import api_view

from buetpx.models import Tutorial,Post,Comment,UserAccount,Tags, Category,Place, Like
from buetpx.serializers import PostSerializer

import json

from quest.models import Quest, Submission

from quest.serializers import QuestInsertSerializer, SubmissionInsertSerializer, PostLikeSerializer, QuestStatusSerializer, SubmissionShortlistedSerializer





# notun add korsi 
from django.db.models.query import QuerySet
from django.http import HttpResponse




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
    
@api_view(['Get'])

def get_active_quests(request):
    
    if request.method == 'GET':
        active_quest = Quest.objects.filter(status="Active")               
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
    



# @api_view(['PUT'])

# def update_post_shortlisted(request, quest_id, post_id  ):
#     print("quest_id:",quest_id)
#     print("post_id:",post_id)
#     submission = Submission.objects.filter(quest=quest_id, post=post_id)
    
#     # if submission_serializer.is_valid(): 
#     #         submission_serializer.data.shortlisted = 1
#     #         submission_serializer.save()
#     if request.method == 'PUT': 
#         submission_data = JSONParser().parse(request) 
#         submission_serializer = SubmissionInsertSerializer(submission, data=submission_data) 
#         if submission_serializer.is_valid(): 
#             # quest_serializer.save() 
#             # submission_serializer.save()
#             submission_serializer.save(update_fields=['shortlisted'])

#             return JsonResponse(submission_serializer.data) 
#         return JsonResponse(submission_serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
    
@api_view(['PUT'])


def update_post_shortlisted(request, id, post_id ):
    try: 
        submission_obj = Submission.objects.get(quest_id=id, post_id= post_id)
        

        
        
        if request.method == 'PUT': 
            submission_data = JSONParser().parse(request) 
            submission_serializer = SubmissionShortlistedSerializer(submission_obj, data=submission_data) 
            if submission_serializer.is_valid(): 
                # submission_serializer.save() 
                submission_serializer.save(update_fields=['shortlisted'])

                return JsonResponse(submission_serializer.data) 
            return JsonResponse(submission_serializer.errors, status=status.HTTP_400_BAD_REQUEST) 

   
    except Quest.DoesNotExist: 
        return JsonResponse({'message': 'The Quest does not exist'}, status=status.HTTP_404_NOT_FOUND)  



        
        

    



@api_view(['PUT'])

def update_quest_status(request, id ):
    try: 
        quest_obj = Quest.objects.get(id=id)
        # .update(status=True)

        
        
        if request.method == 'PUT': 
            quest_data = JSONParser().parse(request) 
            quest_serializer = QuestStatusSerializer(quest_obj, data=quest_data) 
            if quest_serializer.is_valid(): 
                # quest_serializer.save() 
                quest_serializer.save(update_fields=['status'])
                # survey.save(update_fields=["active"]) 
                # quest_serializer.save(update_fields=["status"]) 
                return JsonResponse(quest_serializer.data) 
            return JsonResponse(quest_serializer.errors, status=status.HTTP_400_BAD_REQUEST) 

   
    except Quest.DoesNotExist: 
        return JsonResponse({'message': 'The Quest does not exist'}, status=status.HTTP_404_NOT_FOUND) 
    
    
    
@api_view(['GET'])

def get_posts_by_userid(request,id):
    
    if request.method == 'GET':
 
        posts = Post.objects.filter(owner_id = id)    
        post_serializer = PostSerializer(posts,many = True)
        return JsonResponse(post_serializer.data, safe=False)
    
    
@api_view(['Get'])

def get_posts_all_data(request):
    
    if request.method == 'GET':
 
        posts = Post.objects.all()
        post_serializer = PostLikeSerializer(posts,many = True)
        return JsonResponse(post_serializer.data, safe=False)
    

@api_view(['Get'])
def post_like_with_id(request,id):
    
    if request.method == 'GET':
        # get post by id
        post = Post.objects.get(pk = id)
        print("post:",post)
        print("id:",id)
              
        post_serializer = PostLikeSerializer(post,many = False)
        print("post_serializer:",post_serializer.data)
        return JsonResponse(post_serializer.data, safe=False)
    