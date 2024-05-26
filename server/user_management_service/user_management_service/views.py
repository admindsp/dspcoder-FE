from rest_framework.decorators import api_view
from rest_framework.response import responses

@api_view(['POST'])
def login(request):
    return responses({})

@api_view(['POST'])
def signup(request):
    return responses({})

