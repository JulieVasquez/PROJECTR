import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComp } from './components/login-comp/login-comp';
import { RecibidorComp } from './components/recibidor-comp/recibidor-comp';
import { HomeComp } from './components/home-comp/home-comp';
import { RegalosComp } from './components/regalos-comp/regalos-comp';
import { RegistroComp } from './components/registro-comp/registro-comp';

const routes: Routes = [
    { path: '', component: RecibidorComp},
    { path: 'recibidor', component: RecibidorComp },
    { path: 'login', component: LoginComp},
    { path: 'home', component: HomeComp},
    { path: 'regalos', component: RegalosComp},
    { path: 'registro', component: RegistroComp}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
