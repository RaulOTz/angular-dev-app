import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-listtodos',
  standalone: true, 
  imports: [],
  templateUrl: './listtodos.html',
  styleUrl: './listtodos.css',
})

export class Listtodos {
  todos = signal([
    { id: 1, description: 'Learn to Dance' },
    { id: 2, description: 'Become an Expert at Angular' },
    { id: 3, description: 'Visit India' }
  ])
  

}


