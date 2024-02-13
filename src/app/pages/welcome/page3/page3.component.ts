import { Component, OnInit } from '@angular/core';
import animations from 'src/app/animations';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.scss'],
  animations: [animations.fadeIn],
})
export class Page3Component {

  constructor() { }
}
