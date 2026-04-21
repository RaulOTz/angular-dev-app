import { Component, OnInit } from '@angular/core';
import { ApiService, Todo } from '../../services/api';



@Component({
  selector: 'app-listtodos',
  standalone: true, 
  imports: [],
  templateUrl: './listtodos.html',
  styleUrl: './listtodos.css',
})

export class Listtodos implements OnInit{

  todos: Todo[] = [];

  constructor(private todoService: ApiService) {}

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(data => {
      this.todos = data;
    });
  }
}





