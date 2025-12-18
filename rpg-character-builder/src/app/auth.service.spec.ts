/**
 * Author: Chris Newell
 * Date: 2025-12-18
 * File: auth.service.ts
 */

import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private cookieService: CookieService) {}

  /**
   * Signs a user in by validating credentials and setting a session cookie.
   */
  signin(email: string, password: string): boolean {
    // Hardcoded credentials per the course pattern
    if (email === 'admin@rpg.com' && password === 'password') {
      this.cookieService.set('session_user', email);
      return true;
    }

    return false;
  }

  /**
   * Signs a user out by removing the session cookie.
   */
  signout(): void {
    this.cookieService.delete('session_user');
  }

  /**
   * Convenience method for guards/components.
   */
  isAuthenticated(): boolean {
    return this.cookieService.check('session_user');
  }
}
