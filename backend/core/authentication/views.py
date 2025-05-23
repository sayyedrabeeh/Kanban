from django.shortcuts import render

# Create your views here.

class SingupView(APIView):
     permission_classes = [AllowAny]
     def post(self, request):
        username = request.data.get('username')
        email = request.data.get('email')
        password = request.data.get('password')

        if not username or not password:
            return Response({'error': 'username or password is empty'}, status=status.HTTP_400_BAD_REQUEST)
        
        if User.objects.filter(username=username).exists():
            return Response({'error': 'username must be unique'}, status=status.HTTP_400_BAD_REQUEST)

        user = User.objects.create(username=username, email=email)
        user.set_password(password)  
        user.save()

        return Response({'message': 'account created successfully'}, status=status.HTTP_201_CREATED)

