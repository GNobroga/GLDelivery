import { Component, OnInit } from '@angular/core';
import animations from 'src/app/animations';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  animations: [animations.fadeIn],
})
export class SignInComponent {

  constructor() { }

}
