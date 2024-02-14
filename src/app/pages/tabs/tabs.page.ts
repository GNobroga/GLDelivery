import { Component } from '@angular/core';
import { IonMenu } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage {

  constructor() { }

  public openMenu(event: IonMenu): void {
    event.open(true);
  }

}
