import { animate, keyframes, style, transition, trigger } from "@angular/animations";

export default {
  fadeIn: trigger('fadeIn', [
    transition(':enter',
      animate('1s ease-in', keyframes([
        style({
          opacity: 0,
        }),
        style({
          opacity: 1,
        })
      ]))),
  ])
}
