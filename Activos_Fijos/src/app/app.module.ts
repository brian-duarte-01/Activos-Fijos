import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
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
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormTcategoriaComponent } from './tcategoria/form-tcategoria/form-tcategoria.component';
import {MatInputModule} from '@angular/material/input';
import { EdepartamentoComponent } from './edepartamento/edepartamento.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { FormCategoriaComponent } from './categoria/form-categoria/form-categoria.component';
import { ActivoComponent } from './activo/activo.component';
import { EestadoComponent } from './eestado/eestado.component';
import { FormActivoComponent } from './activo/form-activo/form-activo.component';
import { DepresComponent } from './depres/depres.component';
import { FormDepresComponent } from './depres/form-depres/form-depres.component';



@NgModule({
  declarations: [
    AppComponent,
    AnunciosComponent,
    LDepartamentoComponent,
    RdepartamentoComponent,
    LestadoComponent,
    RestadoComponent,
    TcategoriaComponent,
    FormTcategoriaComponent,
    EdepartamentoComponent,
    CategoriaComponent,
    FormCategoriaComponent,
    ActivoComponent,
    EestadoComponent,
    FormActivoComponent,
    DepresComponent,
    FormDepresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    MatButtonModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    RouterModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
