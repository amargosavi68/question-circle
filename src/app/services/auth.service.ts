import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	constructor() {
	}

	logout() {
		this.clearAuthData();
	}

	isAuthenticated(): Observable<boolean> {
		let obj = this.getAuthData();
		if (!obj) {
			return of(false);
		}
		else {
			return of(true);
		}
	}


	private saveAuth(token: string, expiration: Date) {
		localStorage.setItem('token', token);
		localStorage.setItem('expiration', expiration.toISOString())
	}

	private clearAuthData() {
		localStorage.removeItem('token');
		localStorage.removeItem('expiration');
	}

	private getAuthData() {
		const token = localStorage.getItem('token');
		const expiration = localStorage.getItem('expiration')
		if (!token || !expiration) {
			return;
		}
		return { token: token, expiration: expiration };
	}
}
