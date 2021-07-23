import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  'loginForm': FormGroup

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      remember: false,
      admin: false
    })
  }

  formControls() { return this.loginForm.controls; }

  onSubmit(): void {
    this.loginForm.reset({
      username: '',
      password: '',
      remember: false,
      admin: false,
    });
  }
}
