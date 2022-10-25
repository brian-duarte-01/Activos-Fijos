import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnunciosComponent } from './anuncios/anuncios.component';
import { LDepartamentoComponent } from './ldepartamento/ldepartamento.component';
import { LestadoComponent } from './lestado/lestado.component';
import { RdepartamentoComponent } from './rdepartamento/rdepartamento.component';
import { RestadoComponent } from './restado/restado.component';
import { TcategoriaComponent } from './tcategoria/tcategoria.component';

const routes: Routes = [
  {path:'dashboard', component: AnunciosComponent},
  {path:'', redirectTo:'dashboard',pathMatch:'full'},
  {path:'departamento', component: LDepartamentoComponent},
  {path:'rdepartamento', component: RdepartamentoComponent},
  {path:'estado', component: LestadoComponent},
  {path:'restado', component: RestadoComponent},
  {path:'tcategoria', component: TcategoriaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
