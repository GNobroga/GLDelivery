import { Component, OnInit } from '@angular/core';
import animations from 'src/app/animations';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss'],
  animations: [animations.fadeIn],
})
export class Page2Component {

  constructor() { }


}
