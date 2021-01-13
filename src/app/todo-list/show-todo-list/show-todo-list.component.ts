import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'app-show-todo-list',
  templateUrl: './show-todo-list.component.html',
  styleUrls: ['./show-todo-list.component.scss']
})
export class ShowTodoListComponent implements OnInit {

  todos: Array<string> = [];

  constructor(private todoListService: TodoListService) { 

  }

  ngOnInit(): void {
    this.todos = this.todoListService.getTodos();
    console.log(this.todos);
  }

}
