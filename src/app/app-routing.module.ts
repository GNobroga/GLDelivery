import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'welcome',
  },
  {
    path: 'welcome',
    loadChildren: () => import('./pages/welcome/welcome.module'),
  },
  {
    path: 'account',
    loadChildren: () => import('./pages/account/account.module'),
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module'),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
