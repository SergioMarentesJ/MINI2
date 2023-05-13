import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../pipes/pipes.module';
import { NgbPaginationModule, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

import { NavbarComponent } from './navbar/navbar.component';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PeliculasPosterComponent } from './peliculas-poster/peliculas-poster.component';
import { AboutComponent } from './about/about.component';
import { DomseguroPipe } from './about/domseguro.pipe';
import { DulceComponent } from './dulce/dulce.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    NavbarComponent,
    SlideShowComponent,
    AboutComponent,
    PeliculasPosterComponent,
    DomseguroPipe,
    DulceComponent,
    FooterComponent,
    ContactanosComponent
  ],
  exports: [
    NavbarComponent,
    SlideShowComponent,
    AboutComponent,
    DulceComponent,
    ContactanosComponent,
    FooterComponent,
    PeliculasPosterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbPaginationModule, 
    NgbRatingModule,
    PipesModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SharedModule { }
