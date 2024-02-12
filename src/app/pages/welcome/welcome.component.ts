import { Component, ElementRef, OnDestroy, OnInit, ViewChild, computed, inject, signal } from "@angular/core";
import { Gesture, GestureController, GestureDetail, IonContent, NavController, ViewDidEnter } from "@ionic/angular";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss',
})
export default class WelcomeComponent implements ViewDidEnter, OnDestroy {

  @ViewChild('content', { read: ElementRef }) content!: ElementRef<HTMLIonContentElement>;

  public pages: string[] = ['page1', 'page2', 'page3', 'page4'];

  public currentPage = signal(0);

  public isLastPage = computed(() => this.currentPage() >= this.pages.length - 1);

  public stopGesture = signal(false);

  public gesture!: Gesture;

  #navController = inject(NavController);

  #gestureController = inject(GestureController);

  public ionViewDidEnter(): void {
    this.gesture = this.#gestureController.create({
      el: this.content.nativeElement,
      gestureName: 'next',
      onMove: event => {
        this.handlerGestureNext(event);
        this.handlerGesturePrevious(event);
      },
    });
    this.gesture.enable();
  }

  public handlerGestureNext(event: GestureDetail) {
    if (event.deltaX < 0 && !this.stopGesture()) {
      this.next();
      this.stopGesture.set(true);
      setTimeout(() => this.stopGesture.set(false), 150);
    }
  }

  public handlerGesturePrevious(event: GestureDetail) {
    if (event.deltaX > 0 && !this.stopGesture()) {
      this.previous();
      this.stopGesture.set(true);
      setTimeout(() => this.stopGesture.set(false), 150);
    }
  }

  public next(): void {
    if (!this.isLastPage()) {
      this.currentPage.set(this.currentPage() + 1);
      const page = this.pages[this.currentPage()];
      this.#navController.navigateForward([`/welcome/${page}`]);
    }
  }

  public previous(): void {
      if (this.currentPage() > 0) {
        this.currentPage.set(this.currentPage() - 1);
        const page = this.pages[this.currentPage()];
        this.#navController.navigateForward([`/welcome/${page}`]);
      }
  }

  public ngOnDestroy(): void {
    this.gesture.destroy();
  }

}
