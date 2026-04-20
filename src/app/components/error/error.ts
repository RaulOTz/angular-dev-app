import { Component } from '@angular/core';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [],
  templateUrl: './error.html',
  styleUrl: './error.css',
})
export class ErrorComponent {
  errorMessage = 'An Error Ocurred! Contact Support at ***-***';
}
