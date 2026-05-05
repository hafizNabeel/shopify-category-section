import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Injectable({ providedIn: 'root' })
export class PhotoService {
  async pickFromGallery(): Promise<string> {
    const photo = await Camera.getPhoto({
      source: CameraSource.Photos,
      resultType: CameraResultType.Uri,
      quality: 90
    });

    if (!photo.webPath) {
      throw new Error('No image selected');
    }

    return photo.webPath;
  }
}
