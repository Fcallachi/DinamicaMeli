import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { NavibarComponent } from './navibar/navibar.component';
import { Pesquisa2Component } from './pesquisa2/pesquisa2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,    
    PesquisaComponent,
    NavibarComponent,
    Pesquisa2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
