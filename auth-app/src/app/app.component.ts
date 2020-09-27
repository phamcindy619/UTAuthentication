import { Component } from '@angular/core';
import {AuthService} from '@auth0/auth0-angular'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UT Ticket Exchange';

  constructor(public auth: AuthService){}

  loginWithRedirect(): void {
    this.auth.loginWithRedirect();
  }

  logout(): void {
    // Call this to log the user out of the application
   this.auth.logout({returnTo: window.location.origin});
  }
}
