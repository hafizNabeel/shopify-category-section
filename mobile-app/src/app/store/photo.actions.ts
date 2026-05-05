import { createAction, props } from '@ngrx/store';
import { ColorTuneSettings, FeatureType } from './photo.state';

export const selectPhoto = createAction('[Photo] Select Photo', props<{ path: string }>());
export const selectFeature = createAction(
  '[Photo] Select Feature',
  props<{ feature: FeatureType }>()
);
export const updateColorTune = createAction(
  '[Photo] Update Color Tune',
  props<{ settings: ColorTuneSettings }>()
);
export const processPhoto = createAction('[Photo] Process Photo');
export const processPhotoSuccess = createAction(
  '[Photo] Process Photo Success',
  props<{ url: string }>()
);
export const processPhotoFailure = createAction(
  '[Photo] Process Photo Failure',
  props<{ error: string }>()
);
export const resetState = createAction('[Photo] Reset State');
