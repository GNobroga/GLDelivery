import { Component } from '@angular/core';
import animations from 'src/app/animations';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss'],
  animations: [animations.fadeIn],
})
export class Page1Component  {

  constructor() { }



}
