from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .services import (
    restore_old_photo,
    remove_background_image,
    colorize_photo_placeholder,
    light_up_photo_image,
    color_tune_photo_image,
    dehaze_photo_image,
)


def _get_image_file(request):
    image = request.FILES.get("image")
    if not image:
        return None
    return image


@api_view(["POST"])
def restore_photo(request):
    image = _get_image_file(request)
    if not image:
        return Response({"error": "Image file is required."}, status=status.HTTP_400_BAD_REQUEST)
    output_url = restore_old_photo(image)
    return Response({"url": request.build_absolute_uri(output_url)})


@api_view(["POST"])
def remove_background(request):
    image = _get_image_file(request)
    if not image:
        return Response({"error": "Image file is required."}, status=status.HTTP_400_BAD_REQUEST)
    output_url = remove_background_image(image)
    return Response({"url": request.build_absolute_uri(output_url)})


@api_view(["POST"])
def colorize_photo(request):
    image = _get_image_file(request)
    if not image:
        return Response({"error": "Image file is required."}, status=status.HTTP_400_BAD_REQUEST)
    output_url = colorize_photo_placeholder(image)
    return Response({"url": request.build_absolute_uri(output_url)})


@api_view(["POST"])
def light_up_photo(request):
    image = _get_image_file(request)
    if not image:
        return Response({"error": "Image file is required."}, status=status.HTTP_400_BAD_REQUEST)
    output_url = light_up_photo_image(image)
    return Response({"url": request.build_absolute_uri(output_url)})


@api_view(["POST"])
def color_tune_photo(request):
    image = _get_image_file(request)
    if not image:
        return Response({"error": "Image file is required."}, status=status.HTTP_400_BAD_REQUEST)
    brightness = float(request.data.get("brightness", 1.0))
    contrast = float(request.data.get("contrast", 1.0))
    saturation = float(request.data.get("saturation", 1.0))
    output_url = color_tune_photo_image(image, brightness, contrast, saturation)
    return Response({"url": request.build_absolute_uri(output_url)})


@api_view(["POST"])
def dehaze_photo(request):
    image = _get_image_file(request)
    if not image:
        return Response({"error": "Image file is required."}, status=status.HTTP_400_BAD_REQUEST)
    output_url = dehaze_photo_image(image)
    return Response({"url": request.build_absolute_uri(output_url)})
