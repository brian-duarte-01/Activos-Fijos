import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnunciosComponent } from './anuncios/anuncios.component';
import { LDepartamentoComponent } from './ldepartamento/ldepartamento.component';
import { LestadoComponent } from './lestado/lestado.component';
import { RdepartamentoComponent } from './rdepartamento/rdepartamento.component';
import { RestadoComponent } from './restado/restado.component';
import { TcategoriaComponent } from './tcategoria/tcategoria.component';
import { FormTcategoriaComponent } from './tcategoria/form-tcategoria/form-tcategoria.component';
import { EdepartamentoComponent } from './edepartamento/edepartamento.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { FormCategoriaComponent } from './categoria/form-categoria/form-categoria.component';
<<<<<<< HEAD
import { EestadoComponent } from './eestado/eestado.component';
=======
import { ActivoComponent } from './activo/activo.component';
import { FormActivoComponent } from './activo/form-activo/form-activo.component';
>>>>>>> 8b9733334c73bc17ade0f05094a0f0bd075885f7

const routes: Routes = [
  {path:'dashboard', component: AnunciosComponent},
  {path:'', redirectTo:'dashboard',pathMatch:'full'},
  {path:'departamento', component: LDepartamentoComponent},
  {path:'rdepartamento', component: RdepartamentoComponent},
  {path:'estado', component: LestadoComponent},
  {path:'restado', component: RestadoComponent},
  {path:'tcategoria', component: TcategoriaComponent},
  {path:'categoria', component: CategoriaComponent},
  {path:'activo', component: ActivoComponent},
  {path:'activo/cractivo', component: FormActivoComponent},
  {path:'activo/cractivo/:id', component: FormActivoComponent},
  {path:'categoria/crcategoria', component: FormCategoriaComponent},
  {path:'categoria/crcategoria/:id', component: FormCategoriaComponent},
  {path:'tcategoria/crmaquinaria', component: FormTcategoriaComponent},
  {path:'tcategoria/crmaquinaria/:id', component: FormTcategoriaComponent},
  {path:'edepartamento/:id', component: EdepartamentoComponent},
  {path:'eestado/:id', component:EestadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
