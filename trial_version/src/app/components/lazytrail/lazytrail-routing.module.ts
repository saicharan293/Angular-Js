import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazytrailComponent } from './lazytrail.component';

const routes: Routes = [
  {
    path:'',
    component:LazytrailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazytrailRoutingModule { }
