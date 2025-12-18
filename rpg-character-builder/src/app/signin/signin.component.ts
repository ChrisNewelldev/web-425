import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  standalone: true,
  template: `
    <h2>Sign In</h2>
    <p>Please sign in to continue.</p>
  `,
  styles: [],
})
export class SigninComponent {
  private router = inject(Router);
}
