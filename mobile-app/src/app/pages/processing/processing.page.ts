import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { processPhoto } from '../../store/photo.actions';
import { selectSelectedFeature, selectStatus } from '../../store/photo.selectors';

@Component({
  selector: 'app-processing',
  templateUrl: './processing.page.html',
  styleUrls: ['./processing.page.scss']
})
export class ProcessingPage implements OnInit, OnDestroy {
  status$ = this.store.select(selectStatus);
  feature$ = this.store.select(selectSelectedFeature);
  private destroyed$ = new Subject<void>();

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    this.store.dispatch(processPhoto());

    this.status$.pipe(takeUntil(this.destroyed$)).subscribe((status) => {
      if (status === 'success') {
        this.router.navigate(['/result']);
      }
    });
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
