import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { TestPipe } from './test.pipe';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { RouterModule,Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { TestService } from './test.service';
import { UsersComponent } from './users/users.component';
import { UsercardComponent } from './usercard/usercard.component';

const routes:Routes=[
  {
    path:'',component:HomeComponent
  },
  {
    path:'about',component:AboutComponent
  },
  {
    path:'contact',component:ContactComponent
  },
  {
    path:"**",component:NotfoundComponent
  }
  
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TestPipe,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    UsersComponent,
    UsercardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
