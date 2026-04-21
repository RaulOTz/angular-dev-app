import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login';
import { ErrorComponent } from './components/error/error';
import { Listtodos } from './components/listtodos/listtodos';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'ToDo', component: Listtodos },
  { path: '**', component: ErrorComponent }
];
