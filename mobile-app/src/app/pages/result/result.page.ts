import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { resetState } from '../../store/photo.actions';
import { selectOriginalImage, selectProcessedImage } from '../../store/photo.selectors';

@Component({
  selector: 'app-result',
  templateUrl: './result.page.html',
  styleUrls: ['./result.page.scss']
})
export class ResultPage {
  originalImage$: Observable<string | null> = this.store.select(selectOriginalImage);
  processedImage$: Observable<string | null> = this.store.select(selectProcessedImage);

  constructor(private store: Store, private router: Router) {}

  tryAnother(): void {
    this.store.dispatch(resetState());
    this.router.navigate(['/']);
  }
}
