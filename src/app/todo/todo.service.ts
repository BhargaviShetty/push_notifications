import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoArray=[];
  constructor() { }

  addTodo(todo){
    this.todoArray.push(todo);
  }

  getTodo(){
    return this.todoArray;
  }
}
