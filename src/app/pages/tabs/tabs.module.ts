import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TabsPageRoutingModule } from './tabs-routing.module';
import { TabsPage } from './tabs.page';
import { AccountTabComponent } from './account-tab/account-tab.component';
import { BagTabComponent } from './bag-tab/bag-tab.component';
import { FavoriteTabComponent } from './favorite-tab/favorite-tab.component';
import { SearchTabComponent } from './search-tab/search-tab.component';
import { HomeTabComponent } from './home-tab/home-tab.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoriaItemComponent } from './components/category-item/category-itemcomponent';
import { CustomToggleComponent } from './components/custom-toggle/custom-toggle.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsPageRoutingModule,
  ],
  declarations: [
    TabsPage,
    AccountTabComponent,
    BagTabComponent,
    FavoriteTabComponent,
    HomeTabComponent,
    SearchTabComponent,
    CategoriesComponent,
    CategoriaItemComponent,
    CustomToggleComponent
  ]
})
export default class TabsPageModule {}
