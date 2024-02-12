import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';
import { IonicModule } from '@ionic/angular';
import WelcomeComponent from './welcome.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    Page1Component,
    Page2Component,
    Page3Component,
    Page4Component,
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    IonicModule,
  ]
})
export default class WelcomeModule { }
