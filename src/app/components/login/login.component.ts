import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    localStorage.removeItem('userInfo');
    this.createLoginForm();
  }

  login() {
    if (this.loginForm?.get('email').value === 'admin' && this.loginForm?.get('password').value === 'admin') {
      localStorage.setItem('userInfo', JSON.stringify(this.loginForm.value));
      this.router.navigate(['/servers']);
    }
  }
  createLoginForm() {
    this.loginForm = this.formBuilder?.group({
      email: [null, Validators.required],
      password: [null, Validators.required]
    });
  }
}
