import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { updateColorTune, selectFeature } from '../../store/photo.actions';
import { selectColorTune, selectOriginalImage } from '../../store/photo.selectors';
import { ColorTuneSettings, FeatureType } from '../../store/photo.state';

@Component({
  selector: 'app-feature-select',
  templateUrl: './feature-select.page.html',
  styleUrls: ['./feature-select.page.scss']
})
export class FeatureSelectPage {
  originalImage$: Observable<string | null> = this.store.select(selectOriginalImage);
  colorTune$: Observable<ColorTuneSettings> = this.store.select(selectColorTune);

  constructor(private store: Store, private router: Router) {}

  chooseFeature(feature: FeatureType): void {
    this.store.dispatch(selectFeature({ feature }));
    this.router.navigate(['/processing']);
  }

  updateTune(settings: ColorTuneSettings): void {
    this.store.dispatch(updateColorTune({ settings }));
  }
}
