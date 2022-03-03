import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarUsuarioComponent } from './core/components/editar-usuario/editar-usuario.component';
import { EstructuraComponent } from './core/components/estructura/estructura.component';

const routes: Routes = [
  {path:'', component:EstructuraComponent},
  {path:'editar', component:EditarUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
