import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { FoodComponent } from '../components/food/food.component';
import { CategoriesComponent } from '../components/categories/categories.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    FoodComponent,
    CategoriesComponent,
  ],
  declarations: [HomePage],
})
export default class HomePageModule {}
