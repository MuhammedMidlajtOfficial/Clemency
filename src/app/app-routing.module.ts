import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontEndComponent } from './front-end/front-end.component';
import { HomeComponent } from './home/home.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {path:'',component:FrontEndComponent},
  {path:'home',component:HomeComponent},
  {path:'payment',component:PaymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
