import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarMenuComponent } from './navbar-menu/navbar-menu.component';
import { PagInicioComponent } from './pag-inicio/pag-inicio.component';
import { PagContactoComponent } from './pag-contacto/pag-contacto.component';
import { PagProyectosComponent } from './pag-proyectos/pag-proyectos.component';
import { RouterModule } from '@angular/router';
import { NavbarFooterComponent } from './navbar-footer/navbar-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarMenuComponent,
    PagInicioComponent,
    PagContactoComponent,
    PagProyectosComponent,
    NavbarFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: PagInicioComponent },
      { path: 'proyectos', component: PagProyectosComponent },
      { path: 'contacto', component: PagContactoComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
