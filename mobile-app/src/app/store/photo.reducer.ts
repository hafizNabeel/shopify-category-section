import { createReducer, on } from '@ngrx/store';
import { initialPhotoState } from './photo.state';
import {
  selectPhoto,
  selectFeature,
  updateColorTune,
  processPhoto,
  processPhotoSuccess,
  processPhotoFailure,
  resetState
} from './photo.actions';

export const photoReducer = createReducer(
  initialPhotoState,
  on(selectPhoto, (state, { path }) => ({
    ...state,
    originalImagePath: path,
    processedImageUrl: null,
    status: 'idle',
    errorMessage: null
  })),
  on(selectFeature, (state, { feature }) => ({
    ...state,
    selectedFeature: feature,
    status: 'idle',
    errorMessage: null
  })),
  on(updateColorTune, (state, { settings }) => ({
    ...state,
    colorTune: settings
  })),
  on(processPhoto, (state) => ({
    ...state,
    status: 'loading',
    errorMessage: null
  })),
  on(processPhotoSuccess, (state, { url }) => ({
    ...state,
    status: 'success',
    processedImageUrl: url
  })),
  on(processPhotoFailure, (state, { error }) => ({
    ...state,
    status: 'error',
    errorMessage: error
  })),
  on(resetState, () => initialPhotoState)
);
