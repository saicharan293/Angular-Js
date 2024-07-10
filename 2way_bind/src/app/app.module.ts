import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { TestPipe } from './test.pipe';
import { HomeComponent } from './home/home.component';
import { RouterModule,Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { Homechild1Component } from './homechild1/homechild1.component';
import { Homechild2Component } from './homechild2/homechild2.component';
import { ProductService } from './product.service';

const routes:Routes=[
  {
    path:'',component:HomeComponent
  },
  {
    path:'home',component:HomeComponent,
    children:[
      {
        path:'homechild1',component:Homechild1Component,
      },
      {
        path:'homechild2',component:Homechild2Component,
      },
    ]
  },
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},

  {
    path:"**",component:NotfoundComponent
  },
  
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TestPipe,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    Homechild1Component,
    Homechild2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
