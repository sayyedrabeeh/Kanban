from django.shortcuts import render

# Create your views here.

class SingupView(APIView):
        permission_classes = [AllowAny]

