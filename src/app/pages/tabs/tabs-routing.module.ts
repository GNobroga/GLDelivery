import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';
import { HomeTabComponent } from './home-tab/home-tab.component';
import { SearchTabComponent } from './search-tab/search-tab.component';
import { BagTabComponent } from './bag-tab/bag-tab.component';
import { FavoriteTabComponent } from './favorite-tab/favorite-tab.component';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        component: HomeTabComponent,
      },
      {
        path: 'search',
        component: SearchTabComponent,
      },
      {
        path: 'favorite',
        component: SearchTabComponent,
      },
      {
        path: 'bag',
        component: BagTabComponent,
      },
      {
        path: 'favorite',
        component: FavoriteTabComponent,
      },
    ],
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
  declarations: []
})
export class TabsPageRoutingModule {}
