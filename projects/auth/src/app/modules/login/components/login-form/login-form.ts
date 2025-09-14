import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginFormData } from '../../../../../../../shared-lib/src/lib/auth/models/login-form-data.model'
//import { LoginFormData } from '@shared-lib/auth/models/login-form-data.model';
@Component({
  selector: 'app-login-form',
  standalone: false,
  templateUrl: './login-form.html',
  styleUrl: './login-form.scss',
})
export class LoginForm {
  loginForm: FormGroup;
  @Output() loginSubmit = new EventEmitter<LoginFormData>();


  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.loginSubmit.emit(this.loginForm.value as LoginFormData);
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
