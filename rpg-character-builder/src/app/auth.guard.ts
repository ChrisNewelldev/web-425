/**
 * Author: Chris Newell
 * Date: 2025-12-18
 * File: auth.guard.ts
 */

import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

// Functional guard (Angular standalone style)
// Requirement: allow access only if the `session_user` cookie exists;
// otherwise redirect to /signin.
export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const cookieService = inject(CookieService);

  const hasSessionUser = cookieService.check('session_user');

  if (hasSessionUser) {
    return true;
  }

  router.navigate(['/signin']);
  return false;
};
