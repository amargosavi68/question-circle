import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { map, retry, catchError } from "rxjs/operators";
import { backendURL } from '../lib/constant';
import { User } from '../interfaces/User';

@Injectable({
	providedIn: 'root'
})
export class UserService {

	constructor(private http: HttpClient) { }

	getUser(user: User) {
		return this.http.get(`${backendURL}/users/${user.email}`);
	}

	createUser(user: Object): Observable<Object> {
		return this.http.post<Object>(`${backendURL}/users`, user);
	}

	updateUserInfo(user: User): Observable<User> {
		return this.http.put<User>(`${backendURL}/users/${user.id}`, user);
	}

}
