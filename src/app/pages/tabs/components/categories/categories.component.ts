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
      source: 'assets/icons/humburguer.svgnpm ',
      label: 'Burguer',
    },
    {
      source: 'assets/icons/pizza.png',
      label: 'Pizza',
    },
    {
      source: 'assets/icons/meat.png',
      label: 'Carne',
    },
    {
      source: 'assets/icons/ice_cream.png',
      label: 'Sorvete'
    },
    {
      source: 'assets/icons/ice_cream.png',
      label: 'Sorvete'
    },
    {
      source: 'assets/icons/ice_cream.png',
      label: 'Sorvete'
    }
    
  ];

  constructor() { }

}
