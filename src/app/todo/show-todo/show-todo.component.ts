import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-show-todo',
  templateUrl: './show-todo.component.html',
  styleUrls: ['./show-todo.component.scss']
})
export class ShowTodoComponent implements OnInit {

  list;
  value=1;

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
    this.list = this.todoService.getTodo();
  }

  

}
