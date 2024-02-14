import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.scss'],
})
export class HighlightsComponent {

  @Input()
  public direction: 'row' | 'column' = 'row';

  constructor() { }


}
