import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AuthModule } from '@auth0/auth0-angular';
import { AuthGuard } from '@auth0/auth0-angular'

const routes: Routes = [
  {
    path: '',
    component: AppComponent, 
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [RouterModule.forRoot(routes)],   
  exports: [RouterModule],
})
export class AppRoutingModule {}
