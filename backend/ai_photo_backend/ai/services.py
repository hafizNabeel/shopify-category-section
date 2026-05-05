import io
import uuid
from pathlib import Path

import cv2
import numpy as np
from django.conf import settings
from PIL import Image, ImageEnhance, ImageFilter
from rembg import remove


def _save_image(image: Image.Image, suffix: str = "png") -> str:
    output_dir = Path(settings.MEDIA_ROOT) / "processed"
    output_dir.mkdir(parents=True, exist_ok=True)
    filename = f"{uuid.uuid4().hex}.{suffix}"
    output_path = output_dir / filename
    image.save(output_path)
    return f"{settings.MEDIA_URL}processed/{filename}"


def restore_old_photo(image_file) -> str:
    image = Image.open(image_file).convert("RGB")
    image = image.filter(ImageFilter.DETAIL)
    image = ImageEnhance.Sharpness(image).enhance(1.3)
    image = ImageEnhance.Contrast(image).enhance(1.15)
    return _save_image(image, "jpg")


def remove_background_image(image_file) -> str:
    input_bytes = image_file.read()
    output_bytes = remove(input_bytes)
    image = Image.open(io.BytesIO(output_bytes)).convert("RGBA")
    return _save_image(image, "png")


def colorize_photo_placeholder(image_file) -> str:
    image = Image.open(image_file).convert("RGB")
    image = ImageEnhance.Color(image).enhance(1.2)
    return _save_image(image, "jpg")


def light_up_photo_image(image_file) -> str:
    image = Image.open(image_file).convert("RGB")
    image = ImageEnhance.Brightness(image).enhance(1.2)
    image = ImageEnhance.Contrast(image).enhance(1.1)
    return _save_image(image, "jpg")


def color_tune_photo_image(image_file, brightness: float, contrast: float, saturation: float) -> str:
    image = Image.open(image_file).convert("RGB")
    image = ImageEnhance.Brightness(image).enhance(brightness)
    image = ImageEnhance.Contrast(image).enhance(contrast)
    image = ImageEnhance.Color(image).enhance(saturation)
    return _save_image(image, "jpg")


def dehaze_photo_image(image_file) -> str:
    image = Image.open(image_file).convert("RGB")
    np_image = np.array(image)
    hsv = cv2.cvtColor(np_image, cv2.COLOR_RGB2HSV)
    h, s, v = cv2.split(hsv)
    v = cv2.equalizeHist(v)
    hsv = cv2.merge((h, s, v))
    result = cv2.cvtColor(hsv, cv2.COLOR_HSV2RGB)
    output = Image.fromarray(result)
    return _save_image(output, "jpg")
