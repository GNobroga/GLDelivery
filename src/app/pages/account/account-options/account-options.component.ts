import { Component, DoCheck, Input, signal } from '@angular/core';

@Component({
  selector: 'app-account-options',
  templateUrl: './account-options.component.html',
  styleUrls: ['./account-options.component.scss'],
})
export class AccountOptionsComponent implements DoCheck {

  @Input()
  public mode: 'register' | 'sign' = 'sign';

  public isRegister = signal(false);

  constructor() { }

  public ngDoCheck(): void {
    if (this.mode === 'register') {
      this.isRegister.set(true);
    }
  }


}
