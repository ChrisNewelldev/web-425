/**
 * Author: Chris Newell
 * Date: 2025-12-18
 * File: app.component.spec.ts
 */

import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from '@angular/common';

import { AppComponent } from './app.component';
import { routes } from './app.routes';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, RouterTestingModule.withRoutes(routes)],
    }).compileComponents();
  });

  it('should have correct route for PlayersComponent (Player’s link leads to PlayersComponent)', async () => {
    const router = TestBed.inject(Router);
    const location = TestBed.inject(Location);

    await router.navigateByUrl('/players');

    expect(location.path()).toBe('/players');
  });
});
