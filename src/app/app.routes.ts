import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login';
import { ErrorComponent } from './components/error/error';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },

  { path: '**', component: ErrorComponent }
];
