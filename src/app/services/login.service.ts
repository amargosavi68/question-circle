import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of, throwError } from "rxjs";
import { catchError, map, retry } from "rxjs/operators";
import { User } from '../interfaces/User';
import { backendURL } from '../lib/constant';
import { UnsubscriptionError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${backendURL}/users`).pipe(map(data => data));
  }

  createUser(user: Object) {
    // const options = {
    //   header: {
    //     'Content-Type': 'application/json'
    //   },
    //   method: 'POST',
    //   body: JSON.stringify(user)
    // }
    return this.http.post(`${backendURL}/users`, user);
  }
}
