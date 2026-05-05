import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { photoReducer } from './store/photo.reducer';
import { PhotoEffects } from './store/photo.effects';
import { HomePage } from './pages/home/home.page';
import { PickPhotoPage } from './pages/pick-photo/pick-photo.page';
import { FeatureSelectPage } from './pages/feature-select/feature-select.page';
import { ProcessingPage } from './pages/processing/processing.page';
import { ResultPage } from './pages/result/result.page';

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    PickPhotoPage,
    FeatureSelectPage,
    ProcessingPage,
    ResultPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({ photo: photoReducer }),
    EffectsModule.forRoot([PhotoEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25 })
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule {}
