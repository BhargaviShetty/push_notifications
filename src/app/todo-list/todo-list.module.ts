import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTodoToListComponent } from './add-todo-to-list/add-todo-to-list.component';
import { ShowTodoListComponent } from './show-todo-list/show-todo-list.component';
import { SharedNavbarModule } from '../shared-navbar/shared-navbar.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SortPipe } from './sort.pipe';



@NgModule({
  declarations: [AddTodoToListComponent, ShowTodoListComponent, SortPipe],
  imports: [
    CommonModule,
    SharedNavbarModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TodoListModule { }
