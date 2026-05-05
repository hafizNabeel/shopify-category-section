import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { PhotoService } from '../../services/photo.service';
import { selectPhoto } from '../../store/photo.actions';

@Component({
  selector: 'app-pick-photo',
  templateUrl: './pick-photo.page.html',
  styleUrls: ['./pick-photo.page.scss']
})
export class PickPhotoPage {
  isLoading = false;

  constructor(
    private router: Router,
    private photoService: PhotoService,
    private store: Store
  ) {}

  async pickPhoto(): Promise<void> {
    this.isLoading = true;
    try {
      const path = await this.photoService.pickFromGallery();
      this.store.dispatch(selectPhoto({ path }));
      this.router.navigate(['/features']);
    } catch (error) {
      console.error(error);
    } finally {
      this.isLoading = false;
    }
  }
}
