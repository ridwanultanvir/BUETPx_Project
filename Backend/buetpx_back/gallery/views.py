import json
from turtle import position
from django.shortcuts import render
from buetpx.serializers import PostSerializer,PostSerializer2
from rest_framework.parsers import JSONParser 
from rest_framework import status
from rest_framework.decorators import api_view
from django.http.response import JsonResponse
from gallery.models import Gallery
from gallery.serializers import GallerySerializer,GalleryPostSerializer,GalleryPostAddSerializer
from buetpx.models import Post
from unicodedata import category
from gallery.serializers import PostSerializerForId

# get user by id
@api_view(['GET'])
def get_galleries_by_uid(request,uid):
    if request.method == 'GET':
        print(uid)
        galleries = Gallery.objects.filter(owner_id=uid)
        galleries_serializer = GallerySerializer(galleries,many = True)
        
        print(galleries_serializer.data)
        gallery_list=[]
        for gallery in galleries_serializer.data:
            
            posts=Post.objects.filter(gallery=gallery['id'])
            if(len(posts)>0) :
                gallery_list.append({'title':gallery['title'],'owner':gallery['owner'],'id':gallery['id'],'photoUrl':posts[0].photo_url})
            else:
                gallery_list.append({'title':gallery['title'],'owner':gallery['owner'],'id':gallery['id'],'photoUrl':'https://icons.iconarchive.com/icons/alecive/flatwoken/512/Apps-Gallery-icon.png'})
        print("gallery_list:",gallery_list)
            
        return JsonResponse(gallery_list, safe=False)
# get_galleries_by_uid_pid    
@api_view(['GET'])
def get_galleries_by_uid_pid(request,uid,pid):
    if request.method == 'GET':
        
        galleries = Gallery.objects.filter(owner_id=uid)
        galleries_serializer = GallerySerializer(galleries,many = True).data
        
        
        # print(galleries_serializer)
        for gallery in galleries_serializer:
            gallery['post_present']=False
            gal_id=gallery['id']
            posts=Post.objects.filter(gallery=gal_id)
            posts_serializer=PostSerializerForId(posts, many=True)
            post_data = posts_serializer.data
            
            
            for post in post_data:
                # postList.append(post['id'])
                print("post id ",post['id'],pid)
                
                if(int(post['id'])==int(pid)):
                    gallery['post_present']=True
                    print("-------------------------------found-----------------------------")
                    break
        print("galleries new data ",galleries_serializer)
            
            
            
        return JsonResponse(galleries_serializer, safe=False)
@api_view(['GET'])
def get_galleries(request):
    galleries=Gallery.objects.all()
    galleries_serializer = GallerySerializer(galleries,many = True)
    print(galleries_serializer.data)
    return JsonResponse(galleries_serializer.data, safe=False)

def get_post_w_gallery(request,id):
    post=Post.objects.get(pk=id)
    

@api_view(['GET'])
def get_gallery_posts_by_id(request,id):
    if request.method == 'GET':
        post_detail_list=[]
        gallery = Gallery.objects.get(pk=id)
        print('#############gallery####################',gallery)
        gallery_serializer = GalleryPostSerializer(gallery)
        gallery_name=GallerySerializer(gallery).data['title']
        post_id_list=list(gallery_serializer.data['posts'])
        for pid in post_id_list:
            post=Post.objects.get(pk=pid)
            print('post',post)
            
            postserializer=PostSerializer(post)
            print('post data')
            print(postserializer.data)
            
            post_detail_list.append(postserializer.data)
            print('-------p id------',pid)
        jsonResponse=JsonResponse({'gallery_name':gallery_name,'posts':post_detail_list})

        
        return jsonResponse
    
@api_view(['POST'])
# add Gallery
def add_gallery(request):
    print("****************************add gallery*************************************")
    if request.method == 'POST':
        # create a gallery object
        gallery_data = JSONParser().parse(request)
        print("req data", gallery_data)
        gallery_serializer = GallerySerializer(data=gallery_data)
        

        if gallery_serializer.is_valid():
            
             gallery_serializer.save()
             return JsonResponse(gallery_serializer.data, status=status.HTTP_201_CREATED) 
        return JsonResponse(gallery_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def add_remove_post_to_gallery(request):
    print("****************************add post to gallery*************************************")
    if request.method == 'POST':
        # create a gallery object
        gallery_post_data = JSONParser().parse(request)
        print("req data", gallery_post_data)
        
        post_id=gallery_post_data['post_id']
        gallery_id=gallery_post_data['id']
        # get posts list by gallery id
        gallery=Gallery.objects.get(pk=gallery_id)
        gallery_serializer_1 = GalleryPostAddSerializer(gallery,many=False)
        
        print('gallery_serializer_1',gallery_serializer_1.data)
        
        
       
       
        # print('gallery',gallery.data)
        # posts=gallery.posts
        print("--------------------------------------------------------------------------")
        # print("all posts fetched ",type(posts))
        
        posts = gallery_serializer_1.data['posts']
        if not post_id in posts:
            posts.append(post_id)
        else:
            posts.remove(post_id)
        print("posts ",posts)
        new_data={'id':gallery_id,'posts':posts}
        
        gallery_serializer = GalleryPostAddSerializer(gallery,data=new_data)
        
        print(gallery_serializer)
        

        if gallery_serializer.is_valid():
             print("in valid")
             gallery_serializer.save()
             return JsonResponse(gallery_serializer.data, status=status.HTTP_201_CREATED) 
        return JsonResponse(gallery_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    
@api_view(['POST'])
def remove_post_from_gallery(request):
    print("****************************remove post from gallery*************************************")
    if request.method == 'POST':
        # create a gallery object
        gallery_post_data = JSONParser().parse(request)
        print("req data", gallery_post_data)
        
        post_id=gallery_post_data['post_id']
        gallery_id=gallery_post_data['id']
        # get posts list by gallery id
        gallery=Gallery.objects.get(pk=gallery_id)
        gallery_serializer_1 = GalleryPostAddSerializer(gallery,many=False)
        
        print('gallery_serializer_1',gallery_serializer_1.data)
        
        
       
       
        # print('gallery',gallery.data)
        # posts=gallery.posts
        print("--------------------------------------------------------------------------")
        # print("all posts fetched ",type(posts))
        
        posts = gallery_serializer_1.data['posts']
        posts.remove(post_id)
        print("posts ",posts)
        new_data={'id':gallery_id,'posts':posts}
        
        gallery_serializer = GalleryPostAddSerializer(gallery,data=new_data)
        
        print(gallery_serializer)
        

        if gallery_serializer.is_valid():
             print("in valid")
             gallery_serializer.save()
             return JsonResponse(gallery_serializer.data, status=status.HTTP_201_CREATED) 
        return JsonResponse(gallery_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    