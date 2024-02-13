import { AfterViewInit, Component, ElementRef, ViewChild, inject } from '@angular/core';
import { AnimationController, Animation, ViewDidEnter, AnimationDirection } from '@ionic/angular';

@Component({
  selector: 'app-custom-toggle',
  templateUrl: './custom-toggle.component.html',
  styleUrls: ['./custom-toggle.component.scss'],
})
export class CustomToggleComponent implements AfterViewInit  {

  #animationController = inject(AnimationController);

  #animation!: Animation;

  #direction: AnimationDirection = 'reverse';

  @ViewChild('circle', { read: ElementRef })
  circle!: ElementRef<HTMLDivElement>;

  public ngAfterViewInit(): void {
    this.#animation = this.#animationController.create('move');
    this.#animation.addElement(this.circle.nativeElement);
    this.#animation.from('left', '0')
    this.#animation.to('left', 'initial');
    this.#animation.to('right', '0');
    this.#animation.easing('ease-in');
  }



  public apply(): void {
    this.#direction = this.#direction === 'normal' ? 'reverse' : 'normal';
    this.#animation.direction(this.#direction);
    this.#animation.play();
  }



}
