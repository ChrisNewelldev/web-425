/*
  Author: Chris Newell
  Date: 2025-12-18
  File: auth.service.ts
*/

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

export interface User {
  empId: number;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private users: User[] = [
    { empId: 1001, email: 'test@test.com', password: 'Password1!' },
    { empId: 1002, email: 'admin@test.com', password: 'Password1!' },
  ];

  private authState = new BehaviorSubject<boolean>(false);

  constructor(private cookieService: CookieService) {}

  getAuthState(): Observable<boolean> {
    return this.authState.asObservable();
  }

  signin(email: string, password: string): boolean {
    const user = this.users.find(
      (u) => u.email === email && u.password === password
    );

    const isAuth = !!user;

    if (isAuth) {
      // store the email like the book hints
      this.cookieService.set('session_user', email);
    }

    this.authState.next(isAuth);
    return isAuth;
  }

  signout(): void {
    // delete all cookies + force auth false
    this.cookieService.deleteAll();
    this.authState.next(false);

    // simple redirect back to signin route (matches assignment text)
    window.location.href = '/signin';
  }
}
