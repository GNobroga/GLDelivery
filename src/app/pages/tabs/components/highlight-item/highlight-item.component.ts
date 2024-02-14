import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-highlight-item',
  templateUrl: './highlight-item.component.html',
  styleUrls: ['./highlight-item.component.scss'],
})
export class HighlightItemComponent {

  @Input()
  public favorite = false;

  constructor() { }

}
