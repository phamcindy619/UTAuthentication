import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { AuthService } from '@auth0/auth0-angular';

@Component({
    selector: 'app-auth-button',
    template: `
    <ng-container *ngIf="auth.isAuthenticated$ | async; else loggedOut">
      <button (click)="auth.logout({ returnTo: document.location.origin })">
        Log out
      </button>
    </ng-container>

    <ng-template #loggedOut>
      <button (click)="auth.loginWithRedirect()">Log in</button>
    </ng-template>

    <div *ngIf="auth.error$ | async as err">
        Authentication ERROR: {{ err }}
    </div>

    <ul *ngIf="auth.user$ | async as user">
      <li>{{ user.name }}</li>
      <li>{{ user.email }}</li>
    </ul>
  `,
    styles: []
})
export class AuthButtonComponent {
    constructor(@Inject(DOCUMENT) public document: Document, public auth : AuthService) {}
}