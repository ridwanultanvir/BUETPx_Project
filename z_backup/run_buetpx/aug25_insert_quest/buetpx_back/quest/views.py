from unicodedata import category
from django.shortcuts import render
from django.http.response import JsonResponse
# from Backend.buetpx_back.buetpx.models import Place
from rest_framework.parsers import JSONParser 
from rest_framework import status
from rest_framework.decorators import api_view



import json

from quest.models import Quest, Submission

from quest.serializers import QuestInsertSerializer





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