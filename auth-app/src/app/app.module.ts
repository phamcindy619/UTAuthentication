import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AuthButtonComponent } from './components/auth-button/auth-button.component';
 
// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';

@NgModule({
  declarations: [
    AppComponent,
    AuthButtonComponent
  ],
  imports: [
    BrowserModule,
    
    // Import the module into the application, with configuration
    AuthModule.forRoot({
      // domain: 'dev-fy3ept6l.us.auth0.com',
      // clientId: 'MbaZ2thGmzWLFRzIMw2iggagB3OEVcAr'
      domain: 'phamcindy619.us.auth0.com',
      clientId: 'wPlcmtvBKYt7ZKRQnz6vnYwaiaFbs849'
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}