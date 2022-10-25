import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnunciosComponent } from './anuncios/anuncios.component';
import { LDepartamentoComponent } from './ldepartamento/ldepartamento.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RdepartamentoComponent } from './rdepartamento/rdepartamento.component';
import { MatTooltipModule} from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';
import { LestadoComponent } from './lestado/lestado.component';
import { RestadoComponent } from './restado/restado.component';
import { TcategoriaComponent } from './tcategoria/tcategoria.component';


@NgModule({
  declarations: [
    AppComponent,
    AnunciosComponent,
    LDepartamentoComponent,
    RdepartamentoComponent,
    LestadoComponent,
    RestadoComponent,
    TcategoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    MatButtonModule,
    MatPaginatorModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
