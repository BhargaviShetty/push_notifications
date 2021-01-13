import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TodoService } from '../todo.service';


@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  todoForm:FormGroup

  constructor(private router:Router,private formBuilder: FormBuilder, private todoService:TodoService) { 
    this.todoForm = formBuilder.group({
      todo: ['']
    })
  }

  ngOnInit(): void {
  }

  add(){
    console.log(this.todoForm.value.todo);
    this.todoService.addTodo(this.todoForm.value.todo);
  }

  goToShowTodo(){
    this.router.navigate(['showtodo'])
  }

}
