import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CarroselComponent } from './carrosel/carrosel.component';
import { BroncoComponent } from './veiculos/bronco/bronco.component';
import { PoliticaDePrivacidadeComponent } from './politica-de-privacidade/politica-de-privacidade.component';
import { LgpdComponent } from './lgpd/lgpd.component';
import { RangerComponent } from './veiculos/ranger/ranger.component';
import { MarchComponent } from './veiculos/march/march.component';
import { Component } from '@angular/core';
import { ContatoComponent } from './contato/contato.component';
import { VeiculosComponent } from './veiculos/veiculos.component';

export const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
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
    path: 'politica-de-privacidade',
    component: PoliticaDePrivacidadeComponent
  },
  {
    path: 'lgpd',
    component: LgpdComponent
  },
  {
    path: 'contato',
    component:ContatoComponent
  },
  {
    path:'veiculos',
    children: [
      {
        path:'',
        redirectTo:'bronco',
        pathMatch:'full'
      },
      {
        path:'bronco',
        component:BroncoComponent
      },
      {
        path:'ranger',
        component:RangerComponent
      },
      {
        path:'march',
        component:MarchComponent
      }
    ]
  }

];
