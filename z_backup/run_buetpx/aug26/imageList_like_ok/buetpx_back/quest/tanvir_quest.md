http://127.0.0.1:8000/api/insert_quest
POST

Http headers raw: 
Accept: */*
User-Agent: Thunder Client (https://www.thunderclient.com)
Authorization Token 2daf6090a8b3f317e25a932d7147b98a0049b929



http://127.0.0.1:8000/api/insert_submission

Authorization
Token 2daf6090a8b3f317e25a932d7147b98a0049b929

##

FINAL: 

{
    "title": "Home Food Quest",
    "theme":"Theme Food",
    "description": "Food Vlog",
    "category": "Food",    
    "startDate": "2022-01-01 12:12:00",
    "endDate": "2022-11-19 12:12:00",
    "status": "Active",
    "photoUrl": "https://loveincorporated.blob.core.windows.net/contentimages/gallery/9d7f99ea-cd54-4ab0-a383-c9058596daf3-burgerpile.jpg",
    "reward": "USD 400"
}



##

{
    "quest": 1,
    "post":2,
    "shortlisted": 1

}



##
http://127.0.0.1:8000/api/update_quest_status/2


{
    "status": "Ended"
}



##





{
    "quest_title": "Mountain Climb",
    "quest_theme":"Theme Everest",
    "quest_description": "Hill Climbing Adventure",
    "category": "Adventure",    
    "start_date": "2022-01-09 12:12:00",
    "end_date": "2022-09-09 12:12:00",
    "status": "Active",
    "photo_url":"https://i.pinimg.com/originals/fd/c5/4b/fdc54b01e6eabc23673a0415952327e5.jpg",
    "reward": "USD 500"
}







{
    "quest_title": "Beach Quest",
    "quest_theme":"Theme Kuakata",
    "quest_description": "Nature Adventure",
    "category": "Travel",    
    "start_date": "2022-01-09 12:12:00",
    "end_date": "2022-09-09 12:12:00",
    "status": "Active",
    "photo_url":"https://thumbs.dreamstime.com/b/row-colourful-umbrellas-kuakata-beach-bay-bengal-bangladesh-116409173.jpg",
    "reward": "USD 500"
}



{
    "quest_title": "Concert Quest",
    "quest_theme":"Theme Jack White",
    "quest_description": "North America fans",
    "category": "Adventure",    
    "start_date": "2022-01-09 12:12:00",
    "end_date": "2022-11-09 12:12:00",
    "status": "Active",
    "photo_url": "https://globeecho.com/wp-content/uploads/2022/06/1654814143_6870439_1654768589970-hole-in-your-soul-abba-voyage-photo-by-johan-persson-1.jpg",
    "reward": "USD 500"
}



{
    "quest_title": "Valley Quest",
    "quest_theme":"Theme Bisanakandi",
    "quest_description": "Sylhet Quest",
    "category": "Travel",    
    "start_date": "2022-01-09 12:12:00",
    "end_date": "2022-11-09 12:12:00",
    "status": "Inactive",
    "photo_url": "https://live.staticflickr.com/4331/37265420585_5d6ec46a6b_b.jpg",
    "reward": "USD 400"
}



{
    "quest_title": "Street Food Quest",
    "quest_theme":"Theme Food",
    "quest_description": "Food Vlog",
    "category": "Food",    
    "start_date": "2022-01-01 12:12:00",
    "end_date": "2022-11-19 12:12:00",
    "status": "Inactive",
    "photo_url": "https://www.holidify.com/images/cmsuploads/compressed/Street_food_for_sale_in_Ao_Nang_20201217203704.jpg",
    "reward": "USD 400"
}






##

http://127.0.0.1:8000/api/get_ended_quests

http://127.0.0.1:8000/api/get_posts_by_userid




##
@Tanvir 
get_active_quests()

get_ended_quests()

getquestByid(quest_id)



getPostsByUserId(user_id)

submitPhoto(quest_id, user_id, post)
-- submitPhoto = insert_submission

append likecount in post_data entry


* baki 
getShortQuestByQuestid(quest_id)
