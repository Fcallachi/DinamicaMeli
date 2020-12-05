import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { Pesquisa2Component } from './pesquisa2/pesquisa2.component';


const routes: Routes = [
  { path: '', redirectTo:'home',pathMatch: 'full'},
  { path: 'home',component: HomeComponent },
  { path: 'login', component: LoginComponent },  
  { path: 'pesquisa', component: PesquisaComponent},
  { path: 'pesquisa2', component: Pesquisa2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
