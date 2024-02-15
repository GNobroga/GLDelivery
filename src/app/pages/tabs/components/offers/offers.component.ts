import { AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild } from '@angular/core';
import { Subscription, interval, of, switchMap, throttleTime } from 'rxjs';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss'],
})
export class OffersComponent implements AfterViewInit, OnDestroy {

  @Input()
  public mode: 'grid' | null = null;

  @ViewChild('list')
  public offers!: ElementRef<HTMLUListElement>;

  @Input()
  public showMode = false;

  public subscriptions: Subscription[] = [];

  public ngAfterViewInit(): void {
    if (!this.offers.nativeElement.hasChildNodes() || this.showMode) {
      return;
    }

    const CHILD_SIZE = 140;
    const scrollLimitSize = (this.offers.nativeElement.childNodes.length - 1) * CHILD_SIZE;

    let backSlide = false;

    const subscription = interval(1800)
      .pipe(
        throttleTime(200),
        switchMap(() => of(this.offers.nativeElement)))
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
