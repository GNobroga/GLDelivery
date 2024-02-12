import { Component } from '@angular/core';

@Component({
  selector: 'app-account',
  template: `
    <ion-content>
      <router-outlet></router-outlet>
    </ion-content>
  `,
  styleUrls: ['./account.page.scss'],
})
export class AccountPage {

  constructor() { }

}
