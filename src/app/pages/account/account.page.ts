import { Component, OnInit, ViewChild, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, SegmentCustomEvent } from '@ionic/angular';

type SegmentValueType = 'login' | 'signup';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  #route = inject(ActivatedRoute);

  #navController = inject(NavController);

  currentSegmentValue = signal<SegmentValueType>('login');

  constructor() { }

  public ngOnInit() {
    const path = this.#route.snapshot.firstChild?.routeConfig?.path as SegmentValueType;
    this.currentSegmentValue.set(path);
  }

  public onSegmentValueChange(event: SegmentCustomEvent) {
    this.#navController.navigateForward(`/account/${event.detail.value}`);
  }
}
