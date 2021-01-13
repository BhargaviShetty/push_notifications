import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { ShowTodoComponent } from './show-todo/show-todo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SortPipe } from './sort.pipe';



@NgModule({
  declarations: [AddTodoComponent, ShowTodoComponent, SortPipe],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class TodoModule { }
