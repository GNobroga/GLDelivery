import { Component, OnInit } from '@angular/core';
import animations from 'src/app/animations';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  animations: [animations.fadeIn],
})
export class RegisterComponent {

  constructor() { }

}
