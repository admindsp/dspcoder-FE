from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    # Add any additional fields or methods relevant to your User model

    class Meta:
        # Add this meta class to specify a custom related_name for the groups and user_permissions fields
        # Replace 'custom_groups' and 'custom_user_permissions' with your preferred related_name values
        db_table = 'auth_user'  # Ensure the table name matches the default user table name
        abstract = False  # Set to False to indicate that this is a concrete User model
        swappable = 'AUTH_USER_MODEL'  # If you plan to use this model as the default User model

    # Define the related_name for the groups field to avoid clashes
    groups = models.ManyToManyField(
        'auth.Group',
        related_name='custom_user_set',  # Change 'custom_user_set' to your preferred related_name
        blank=True,
        verbose_name='groups',
        help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.',
    )

    # Define the related_name for the user_permissions field to avoid clashes
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        related_name='custom_user_set',  # Change 'custom_user_set' to your preferred related_name
        blank=True,
        verbose_name='user permissions',
        help_text='Specific permissions for this user.',
    )
