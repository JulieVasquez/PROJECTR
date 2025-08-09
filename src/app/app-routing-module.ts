import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComp } from './components/login-comp/login-comp';
import { RecibidorComp } from './components/recibidor-comp/recibidor-comp';
import { HomeComp } from './components/home-comp/home-comp';

const routes: Routes = [
    { path: '', component: RecibidorComp},
    { path: 'recibidor', component: RecibidorComp },
    { path: 'login', component: LoginComp},
    { path: 'home', component: HomeComp}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
