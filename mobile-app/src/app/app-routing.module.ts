import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { PickPhotoPage } from './pages/pick-photo/pick-photo.page';
import { FeatureSelectPage } from './pages/feature-select/feature-select.page';
import { ProcessingPage } from './pages/processing/processing.page';
import { ResultPage } from './pages/result/result.page';

const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'pick-photo', component: PickPhotoPage },
  { path: 'features', component: FeatureSelectPage },
  { path: 'processing', component: ProcessingPage },
  { path: 'result', component: ResultPage }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
