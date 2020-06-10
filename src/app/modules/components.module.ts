
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Componentes
import { HeaderComponent } from '../components/header/header.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { FooterComponent } from '../components/footer/footer.component';
import { MapaComponent } from '../components/mapa/mapa.component';
import { LandingComponent } from '../components/landing/landing.component';
import { OfertasComponent } from '../components/ofertas/ofertas.component';
import { LoginComponent } from '../components/login/login.component';
import { AdminComponent } from '../components/admin/admin.component';

export const ComponentsModule = [
  HeaderComponent,
  SidebarComponent,
  FooterComponent,
  MapaComponent,
  LandingComponent,
  OfertasComponent,
  LoginComponent,
  AdminComponent
];
