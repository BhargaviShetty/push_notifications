import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { map, take, tap } from 'rxjs/operators';
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'app-add-todo-to-list',
  templateUrl: './add-todo-to-list.component.html',
  styleUrls: ['./add-todo-to-list.component.scss']
})
export class AddTodoToListComponent implements OnInit {

  todoForm: FormGroup;
  data;

  constructor(private formBuilder: FormBuilder, private todoListService: TodoListService) { 
    this.todoForm = this.formBuilder.group({
      todoData: ['']
    })
  }

  ngOnInit(): void {
    this.todoListService.getData()
    .subscribe((response) => {
      response.pipe(take(10)).subscribe((val) => {
        console.log(val);
      })
      // this.data = response;
      // console.log(this.data);
    });


    this.todoListService.getObs()
    .pipe(
      tap((res:[]) =>{
        let val = res.map((item) => {
          return item*2;
        })
        return val
      })
    ).subscribe((resp) => {
      let res = resp;
      console.log(res);
    })

  }

  addTodo(){
    this.todoListService.addTodos(this.todoForm.value.todoData);
    this.todoForm.reset();
  }

}
