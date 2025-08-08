import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecibidorComp } from './components/recibidor-comp/recibidor-comp';
import { LoginComp } from './components/login-comp/login-comp';

const routes: Routes = [
    { path: '', component: RecibidorComp},
    { path: 'recibidor', component: RecibidorComp },
    { path: 'login', component: LoginComp}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
