import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing-module';
import { LoginPage } from './pages/login-page/login-page';
import { LoginForm } from './components/login-form/login-form';


@NgModule({
  declarations: [
    LoginPage,
    LoginForm
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
