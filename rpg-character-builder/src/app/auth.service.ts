/*
  Author: Chris Newell
  Date: 2025-12-18
  File: auth.guard.ts
*/

import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const cookieService = inject(CookieService);

  const isAuthenticated = cookieService.check('session_user');

  if (isAuthenticated) {
    return true;
  }

  return router.createUrlTree(['/signin']);
};
