import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing-module';
import { RegisterPage } from './pages/register-page/register-page';
import { RegisterForm } from './components/register-form/register-form';


@NgModule({
  declarations: [
    RegisterPage,
    RegisterForm
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule
  ]
})
export class RegisterModule { }
