import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForgotPasswordRoutingModule } from './forgot-password-routing-module';
import { ForgotPasswordPage } from './pages/forgot-password-page/forgot-password-page';
import { ForgotPasswordForm } from './components/forgot-password-form/forgot-password-form';


@NgModule({
  declarations: [
    ForgotPasswordPage,
    ForgotPasswordForm
  ],
  imports: [
    CommonModule,
    ForgotPasswordRoutingModule
  ]
})
export class ForgotPasswordModule { }
