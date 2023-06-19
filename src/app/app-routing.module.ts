import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './pages/home/home.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { PeliculaComponent } from './pages/pelicula/pelicula.component';
import { AboutComponent } from './shared/about/about.component';
import { DulceComponent } from './shared/dulce/dulce.component';
import { ContactanosComponent } from './shared/contactanos/contactanos.component';
import { ReservaComponent } from './shared/reserva/reserva.component';
import { CitasRegistradasComponent } from './shared/citas-registradas/citas-registradas.component';
import { GraficaComponent } from './shared/grafica/grafica.component';
import { GeneradorComponent } from './shared/generador/generador.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RecuperarPasswordComponent } from './components/recuperar-password/recuperar-password.component';
import { RegistrarUsuarioComponent } from './components/registrar-usuario/registrar-usuario.component';
import { VerificarCorreoComponent } from './components/verificar-correo/verificar-correo.component';
import { VerificarComponent } from './components/verificar/verificar.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'dulce', component: DulceComponent},
  {path: 'contactanos', component: ContactanosComponent},
  {path: 'reserva', component: ReservaComponent},
  {path: 'reservaciones', component: CitasRegistradasComponent},
  {path: 'grafica', component: GraficaComponent},
  {path: 'generador', component: GeneradorComponent},
    
  { path: 'login', component: LoginComponent },
  { path: 'registrar-usuario', component: RegistrarUsuarioComponent },
  { path: 'verificar-correo', component: VerificarCorreoComponent },
  { path: 'recuperar-password', component: RecuperarPasswordComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'verificacion', component: VerificarComponent },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },

  {path: 'buscar/:texto', component: BuscarComponent},
  {path: 'pelicula/:id', component: PeliculaComponent},
  
  {path: '', pathMatch: 'full', redirectTo: '/home'},
  {path: '**', pathMatch: 'full', redirectTo: '/home'},

  
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
