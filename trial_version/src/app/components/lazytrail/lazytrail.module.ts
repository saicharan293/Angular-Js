import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazytrailRoutingModule } from './lazytrail-routing.module';
import { LazytrailComponent } from './lazytrail.component';


@NgModule({
  declarations: [
    LazytrailComponent
  ],
  imports: [
    CommonModule,
    LazytrailRoutingModule
  ]
})
export class LazytrailModule { }
