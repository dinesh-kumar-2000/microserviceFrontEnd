import { Component } from '@angular/core';
import { LoginFormData } from '../../../../../../../shared-lib/src/lib/auth/models/login-form-data.model';

@Component({
  selector: 'app-login-page',
  standalone: false,
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss',
})
export class LoginPage {
  Login(formData: LoginFormData) {
    debugger;
  }
}
