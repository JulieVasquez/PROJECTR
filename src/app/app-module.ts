import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { RecibidorComp } from './components/recibidor-comp/recibidor-comp';
import { LoginComp } from './components/login-comp/login-comp';
import { MaterialModule } from './material/material-module';
import { HttpClientModule } from '@angular/common/http';
import { HomeComp } from './components/home-comp/home-comp';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    App,
    RecibidorComp,
    LoginComp,
    HomeComp
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
