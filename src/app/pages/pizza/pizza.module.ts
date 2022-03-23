import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PizzaComponent } from './pizza.component';

const routes: Routes = [
  {
    path: '',
    component: PizzaComponent,
    data: { topbarTitle: 'Produtos' }
  }
];

@NgModule({
  declarations: [
    PizzaComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PizzaModule { }
