# BuetPx_Back

How to launch this django project?

Technology

	Python 
	Django 
	Django Rest Framework
	psycopg2 
	django-cors-headers 


Necessary Commands ( follow serially)

	pip install djangorestframework


	django-admin startproject BuetPx_Back

Now we open settings.py and add Django REST framework to the INSTALLED_APPS array here.

		INSTALLED_APPS = [
			...
			# Django REST framework 
			'rest_framework',
		]
		
Now run below command for postgresql
		
			pip install psycopg2

			
open settings.py and change declaration of DATABASES:

		DATABASES = {
			'default': {
				'ENGINE': 'django.db.backends.postgresql',
				'NAME': 'yourdb',
				'USER': 'postgres',
				'PASSWORD': 'your password',
				'HOST': '127.0.0.1',
				'PORT': '5432',
			}
		}
		
		
pip install django-cors-headers

In settings.py, add configuration for CORS:

		INSTALLED_APPS = [
			...
			# CORS
			'corsheaders',
		]
		
You also need to add a middleware class to listen in on responses:

		MIDDLEWARE = [
			...
			# CORS
			'corsheaders.middleware.CorsMiddleware',
			'django.middleware.common.CommonMiddleware',
		]

Migrate Data Model to PostgreSQL database
Run the Python script: 
		
		python manage.py makemigrations buetpx
		python manage.py migrate buetpx
