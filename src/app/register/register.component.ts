import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../interfaces/User';
import { UserService } from '../services/user.service';

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

	constructor(private fb: FormBuilder, private userService: UserService) { }

	ngOnInit(): void {
	}

	onSubmit(): void {
		const formData = this.registerForm.value;
		const user = {
			name: formData.first_name + " " + formData.last_name,
			email: formData.email,
			password: formData.password,
			admin: false,
			remember: false,
			image: "",
			designation: "",
			contact: ""
		}

		this.userService.createUser(user)
		.subscribe((response) => {
			console.log(response);
		});
		this.registerForm.reset()
	}

}
