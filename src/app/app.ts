import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './services/api';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'frontend-angular-app';

  data = '';

  constructor(private apiService: ApiService) {
    this.load();
  }

  load(){
    this.apiService.getApi().subscribe({next: (res) => this.data = res, error: (err) => console.error(err)});
  }
}
