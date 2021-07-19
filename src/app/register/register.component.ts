import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../interfaces/User';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup = this.fb.group({
    first_name: ['', Validators.required],
    last_name: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    cnf_password: ['', Validators.required],
  });

  user: User[] = [];

  constructor(private fb: FormBuilder, private userService: LoginService) { }

  ngOnInit(): void {
  }

  

  onSubmit(): void {
    const formData = this.registerForm.value;
    const user = {
      name: formData.first_name + " " + formData.last_name,
      email: formData.email,
      password: formData.password,
      admin: false,
      remember: false
    }

    this.userService.createUser(user)
    .subscribe(data => {
      console.log(data);
    });
    this.registerForm.reset();
  }

}
