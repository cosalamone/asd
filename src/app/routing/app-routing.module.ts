import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { AppComponent } from '../app.component';
import { AppGuardService } from '../services/app-guard.service';
import { HomeComponent } from '../pages/home/home.component';
import { LoginPageComponent } from '../pages/login/login-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }, 
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AppGuardService]
  },
  {
    path: 'Login',
    component: LoginComponent
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { useHash: true, enableTracing: true })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
