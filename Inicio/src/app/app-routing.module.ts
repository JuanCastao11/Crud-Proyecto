import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearCuentaComponent } from './components/crear-cuenta/crear-cuenta.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';
import { ListarProductoComponent } from './components/listar-producto/listar-producto.component';

const routes: Routes = [
  {path:'',component:InicioSesionComponent},
  {path:'inicio-sesion',component:InicioSesionComponent},
  {path:'crear-cuenta',component:CrearCuentaComponent},
  {path:'crear-producto',component:ListarProductoComponent},
  {path:'productos',component:CrearProductoComponent},
  {path:'inicio-sesion',component:ListarProductoComponent},
  {path:'listar-productos',component:ListarProductoComponent},
  { path:'crear-producto', component: ListarProductoComponent },
  { path:'listar-producto', component: CrearProductoComponent },
  { path:'editar-producto/:id', component: CrearProductoComponent },
  { path:'editar-producto/:id', component: CrearProductoComponent },
  { path:'**', pathMatch:'full', redirectTo:'' }
];

  @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
