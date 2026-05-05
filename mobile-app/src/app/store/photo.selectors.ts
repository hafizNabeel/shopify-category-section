import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PhotoState } from './photo.state';

export const selectPhotoState = createFeatureSelector<PhotoState>('photo');

export const selectOriginalImage = createSelector(
  selectPhotoState,
  (state) => state.originalImagePath
);

export const selectProcessedImage = createSelector(
  selectPhotoState,
  (state) => state.processedImageUrl
);

export const selectStatus = createSelector(selectPhotoState, (state) => state.status);
export const selectSelectedFeature = createSelector(
  selectPhotoState,
  (state) => state.selectedFeature
);
export const selectColorTune = createSelector(selectPhotoState, (state) => state.colorTune);
export const selectErrorMessage = createSelector(
  selectPhotoState,
  (state) => state.errorMessage
);
