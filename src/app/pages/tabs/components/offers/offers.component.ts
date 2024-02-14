import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss'],
})
export class OffersComponent {

  @Input()
  public mode: 'grid' | null = null;

  constructor() { }

}
