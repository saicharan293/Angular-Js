import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditcardsRoutingModule } from './creditcards-routing.module';
import { CreditcardsComponent } from './creditcards.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { DeleteComponent } from './delete/delete.component';
import { EditComponent } from './edit/edit.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    CreditcardsComponent,
    AddComponent,
    ViewComponent,
    EditComponent,
    DeleteComponent
  ],
  imports: [
    CommonModule,
    CreditcardsRoutingModule,
    MatCardModule
    
  ]
})
export class CreditcardsModule { }
