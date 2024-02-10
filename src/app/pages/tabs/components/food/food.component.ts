import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FoodItemComponent } from '../food-item/food-item.component';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss'],
  standalone: true,
  imports: [IonicModule, FoodItemComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FoodComponent {

  constructor() { }

}
