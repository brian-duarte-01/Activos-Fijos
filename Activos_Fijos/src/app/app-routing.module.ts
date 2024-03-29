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
import { EestadoComponent } from './eestado/eestado.component';
import { ActivoComponent } from './activo/activo.component';
import { FormActivoComponent } from './activo/form-activo/form-activo.component';
import { LdetalleVentaComponent } from './ldetalle-venta/ldetalle-venta.component';
import { RdetalleVentaComponent } from './rdetalle-venta/rdetalle-venta.component';
import { DepresComponent } from './depres/depres.component';
import { LalquilerComponent } from './lalquiler/lalquiler.component';
import { LproductoComponent } from './lproducto/lproducto.component';
import { LproveedorComponent } from './lproveedor/lproveedor.component';

const routes: Routes = [
  { path: 'dashboard', component: AnunciosComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'departamento', component: LDepartamentoComponent },
  { path: 'rdepartamento', component: RdepartamentoComponent },
  { path: 'estado', component: LestadoComponent },
  { path: 'restado', component: RestadoComponent },
  { path: 'tcategoria', component: TcategoriaComponent },
  { path: 'categoria', component: CategoriaComponent },
  { path: 'activo', component: ActivoComponent },
  { path: 'depres', component: DepresComponent },
  { path: 'activo/cractivo', component: FormActivoComponent },
  { path: 'activo/cractivo/:id', component: FormActivoComponent },
  { path: 'categoria/crcategoria', component: FormCategoriaComponent },
  { path: 'categoria/crcategoria/:id', component: FormCategoriaComponent },
  { path: 'tcategoria/crmaquinaria', component: FormTcategoriaComponent },
  { path: 'tcategoria/crmaquinaria/:id', component: FormTcategoriaComponent },
  { path: 'edepartamento/:id', component: EdepartamentoComponent },
  { path: 'eestado/:id', component: EestadoComponent },
  { path: 'detalleventa', component: LdetalleVentaComponent },
  { path: 'rdetalleventa', component: RdetalleVentaComponent },
  { path: 'alquiler', component: LalquilerComponent },
  { path: 'proveedor', component: LproductoComponent },
  {path:'producto', component: LproveedorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
