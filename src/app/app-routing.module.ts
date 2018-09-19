import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './components/home/home.component';
import {OrderComponent} from './components/order/order.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
  },
  {
    path:'home',
    component:HomeComponent,
  },
  {
    path:'order',
    component:OrderComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
