import { Component, Input, OnInit } from '@angular/core';
import { ICategory } from '../categories/categories.component';

@Component({
  selector: 'app-categoria-item',
  templateUrl: './category-itemcomponent.html',
  styleUrls: ['./category-item.component.scss'],
})
export class CategoriaItemComponent  {

  @Input() category!: ICategory;

  constructor() { }

}
