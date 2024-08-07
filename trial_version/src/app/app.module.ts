import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CourseComponent } from './course/course.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TableComponent } from './components/table/table.component';
import { AngularComponent } from './course/angular/angular.component';
import { NodejsComponent } from './course/nodejs/nodejs.component';
import { MongodbComponent } from './course/mongodb/mongodb.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'
import { provideHttpClient } from '@angular/common/http';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { AdminComponent } from './components/admin/admin.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
// import { LazytrailComponent } from './components/lazytrail/lazytrail.component';
// import { NavdashboardComponent } from './dashboard/navdashboard/navdashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    CourseComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    TableComponent,
    AngularComponent,
    NodejsComponent,
    MongodbComponent,
    ParentComponent,
    ChildComponent,
    AdminComponent,
    // LazytrailComponent,
    // NavdashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
