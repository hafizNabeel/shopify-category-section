from django.urls import path
from . import views

urlpatterns = [
    path("restore/", views.restore_photo, name="restore-photo"),
    path("remove-bg/", views.remove_background, name="remove-background"),
    path("colorize/", views.colorize_photo, name="colorize-photo"),
    path("lightup/", views.light_up_photo, name="light-up-photo"),
    path("color-tune/", views.color_tune_photo, name="color-tune-photo"),
    path("dehaze/", views.dehaze_photo, name="dehaze-photo"),
]
