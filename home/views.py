from django.shortcuts import render
from .data import data

def index(request):
    # Check for language selection in the URL or default to English
    lang = request.GET.get('lang', 'en')

    # Get data for the selected language (default to 'en' if language not found)
    content = data.get(lang, data['en'])

    return render(request, 'home/templates/index.html', {
        'content': content,
        'current_language': lang
    })
