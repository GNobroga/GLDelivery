import { AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild } from '@angular/core';
import { Subscription, interval, of,  switchMap, throttleTime } from 'rxjs';

@Component({
  selector: 'app-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.scss'],
})
export class HighlightsComponent implements AfterViewInit, OnDestroy {

  @Input()
  public direction: 'row' | 'column' = 'row';

  @Input()
  public favoriteMode = false;

  @ViewChild('list')
  public highlights!: ElementRef<HTMLUListElement>;

  public subscriptions: Subscription[] = [];


  public ngAfterViewInit(): void {
    if (!this.highlights.nativeElement.hasChildNodes() || this.favoriteMode) {
      return;
    }

    const CHILD_SIZE = 260;
    const scrollLimitSize = (this.highlights.nativeElement.childNodes.length - 1) * CHILD_SIZE;

    let backSlide = false;

    const subscription = interval(1500)
      .pipe(
        throttleTime(500),
        switchMap(() => of(this.highlights.nativeElement)))
      .subscribe(e => {

        const scrollSize = e.scrollLeft;

        if (scrollSize >= scrollLimitSize || backSlide && scrollSize !== 0) {
          e.scrollTo({ left: e.scrollLeft - CHILD_SIZE, behavior: 'smooth' });
          backSlide = true;
        } else {
          e.scrollTo({ left: e.scrollLeft + CHILD_SIZE, behavior: 'smooth' });
          backSlide = false;
        }
      });

      this.subscriptions.push(subscription);
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach(x => x.unsubscribe());
  }


}
