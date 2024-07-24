import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyFirstComponent } from './my-first/my-first.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path:'',
    component:MyFirstComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'about/:username',
    component:AboutComponent
  },
  {
    path:'products',
    component:ProductsComponent
  },
  {
    path:'about/:username',
    component:AboutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
