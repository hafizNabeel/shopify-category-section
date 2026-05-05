export type FeatureType = 'restore' | 'remove-bg' | 'colorize' | 'lightup' | 'color-tune' | 'dehaze';

export interface ColorTuneSettings {
  brightness: number;
  contrast: number;
  saturation: number;
}

export interface PhotoState {
  status: 'idle' | 'loading' | 'success' | 'error';
  originalImagePath: string | null;
  processedImageUrl: string | null;
  selectedFeature: FeatureType | null;
  errorMessage: string | null;
  colorTune: ColorTuneSettings;
}

export const initialPhotoState: PhotoState = {
  status: 'idle',
  originalImagePath: null,
  processedImageUrl: null,
  selectedFeature: null,
  errorMessage: null,
  colorTune: {
    brightness: 1.0,
    contrast: 1.0,
    saturation: 1.0
  }
};
