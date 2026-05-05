import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, from, map, of, switchMap, withLatestFrom } from 'rxjs';
import { ApiService } from '../services/api.service';
import {
  processPhoto,
  processPhotoFailure,
  processPhotoSuccess
} from './photo.actions';
import {
  selectColorTune,
  selectOriginalImage,
  selectSelectedFeature
} from './photo.selectors';

@Injectable()
export class PhotoEffects {
  constructor(
    private actions$: Actions,
    private api: ApiService,
    private store: Store
  ) {}

  processPhoto$ = createEffect(() =>
    this.actions$.pipe(
      ofType(processPhoto),
      withLatestFrom(
        this.store.select(selectOriginalImage),
        this.store.select(selectSelectedFeature),
        this.store.select(selectColorTune)
      ),
      switchMap(([_, imagePath, feature, colorTune]) => {
        if (!imagePath || !feature) {
          return of(processPhotoFailure({ error: 'Missing image or feature selection.' }));
        }

        return from(fetch(imagePath)).pipe(
          switchMap((response) => response.blob()),
          switchMap((blob) => {
            const formData = new FormData();
            formData.append('image', blob, 'photo.jpg');

            if (feature === 'color-tune') {
              formData.append('brightness', colorTune.brightness.toString());
              formData.append('contrast', colorTune.contrast.toString());
              formData.append('saturation', colorTune.saturation.toString());
            }

            return this.api.processPhoto(feature, formData).pipe(
              map((response) => processPhotoSuccess({ url: response.url })),
              catchError((error) =>
                of(
                  processPhotoFailure({
                    error: error?.message ?? 'Processing failed.'
                  })
                )
              )
            );
          })
        );
      })
    )
  );
}
