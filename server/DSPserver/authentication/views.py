from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages

def login_view(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            # Redirect to a success page
            return redirect('success')
        else:
            messages.error(request, 'Invalid credentials')
    return render(request, 'authentication/login.html')

def logout_view(request):
    logout(request)
    # Redirect to a logout page or homepage
    return redirect('home')
