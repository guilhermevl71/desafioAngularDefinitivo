import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CarroselComponent } from './carrosel/carrosel.component';
import { BroncoComponent } from './veiculos/bronco/bronco.component';
import { PoliticaDePrivacidadeComponent } from './politica-de-privacidade/politica-de-privacidade.component';
import { LgpdComponent } from './lgpd/lgpd.component';

export const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path: 'login',
    component:LoginComponent
  },
  {
    path:'home',
    component:CarroselComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'teste',
    component:BroncoComponent
  },
  {
    path: 'politica-de-privacidade',
    component: PoliticaDePrivacidadeComponent
  },
  {
    path: 'lgpd',
    component: LgpdComponent
  }

];
