import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CourseComponent } from './course/course.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TableComponent } from './components/table/table.component';
import { AngularComponent } from './course/angular/angular.component';
import { NodejsComponent } from './course/nodejs/nodejs.component';
import { MongodbComponent } from './course/mongodb/mongodb.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:'home',
    redirectTo:'/',
    pathMatch:'full'
  },
  {
    path:'about-us',
    component:AboutUsComponent
  },
  {
    path:'courses',
    component:CourseComponent,
    children:[
      {
        path:'angular',
        component:AngularComponent
      },
      {
        path:'nodejs',
        component:NodejsComponent
      },
      {
        path:'mongodb',
        component:MongodbComponent
      },
    ]
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'table',
    component:TableComponent
  },
  {
    path:'dashboard',
    loadChildren:()=>import('./dashboard/dashboard.module').then(m=>m.DashboardModule)
  },
  {
    path:'offers',
    loadChildren:()=>import('./components/offers/offers.module').then(m=>m.OffersModule)
  },
  {
    path:'lazy',
    loadChildren:()=>import('./components/lazytrail/lazytrail.module').then(m=>m.LazytrailModule)
  },
  {
    path:'**',
    component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
