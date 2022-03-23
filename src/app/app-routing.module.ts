import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './pages/layouts/layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/pizza',
    pathMatch: 'full'
  },

  {
    path: 'pizza',
    component: LayoutComponent,
    loadChildren: () => import('./pages/pizza/pizza.module').then(m => m.PizzaModule)
  },
  {
    path: 'list',
    component: LayoutComponent,
    loadChildren: () => import('./pages/list/list.module').then(m => m.ListModule)
  },

  {
    path: '**',
    loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
