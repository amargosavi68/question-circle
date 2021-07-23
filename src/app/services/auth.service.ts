import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {

   }

  getAuth() {
    return;
  }

  private saveAuth(token: string, expiration: Date ) {
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
    if (!token || ! expiration) {
      return;
    }
    return {token: token, expiration: expiration};
  }
}
