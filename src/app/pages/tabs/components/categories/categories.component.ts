import { Component, OnInit } from '@angular/core';

export interface ICategory {
  source: string;
  label: string;
}

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent {

  public categories: ICategory[] = [
    {
      source: 'assets/images/burguer.png',
      label: 'Burguer',
    },
    {
      source: 'assets/images/pizza.png',
      label: 'Pizza',
    },
    {
      source: 'assets/images/meat.png',
      label: 'Carne',
    },
    {
      source: 'assets/images/ice_cream.png',
      label: 'Sorvete'
    },
    {
      source: 'assets/images/ice_cream.png',
      label: 'Sorvete'
    },
    {
      source: 'assets/images/ice_cream.png',
      label: 'Sorvete'
    }

  ];

  constructor() { }

}
