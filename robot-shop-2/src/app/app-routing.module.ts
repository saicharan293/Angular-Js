import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent,
    title:"Home - Joe's Robot Shop"
  },
  {
    path:'catalog',
    component:CatalogComponent,
    title:'Catalog - Home'
  },
  {
    path:'cart',
    component:CartComponent,
    title:'Cart'
  },
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
