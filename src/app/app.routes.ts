import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'home',
    component:HomeComponent,
    children:[ /*  o children só vai aparecer quando eu uso dentro do html pai, que seria o homeComponent */
      {
        path:'login',
        component:LoginComponent
      }
    ]
  },
  {
    path:'dashboard',
    component:DashboardComponent
  }

];
