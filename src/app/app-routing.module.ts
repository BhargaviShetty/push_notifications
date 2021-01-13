import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostBookComponent } from './create-book/post-book/post-book.component';
import { DeleteABookComponent } from './delete-book/delete-a-book/delete-a-book.component';
import { Error404Component } from './error/error404/error404.component';
import { GetABookComponent } from './get-books/get-a-book/get-a-book.component';
import { GetAllBooksComponent } from './get-books/get-all-books/get-all-books.component';
import { LandingPageComponent } from './landing/landing-page/landing-page.component';
import { TestComponent } from './test/test.component';
import { AddTodoToListComponent } from './todo-list/add-todo-to-list/add-todo-to-list.component';
import { ShowTodoListComponent } from './todo-list/show-todo-list/show-todo-list.component';
import { AddTodoComponent } from './todo/add-todo/add-todo.component';
import { ShowTodoComponent } from './todo/show-todo/show-todo.component';
import { UpdateABookComponent } from './update-book/update-a-book/update-a-book.component';


const routes: Routes = [
  // { path: '', component: LandingPageComponent},
  // { path: 'addtodo', component: AddTodoComponent },
  // { path: 'showtodo', component: ShowTodoComponent },
  // { path: 'getbooks', component: GetAllBooksComponent},
  // { path: 'getbook', component: GetABookComponent},
  // { path: 'postbook', component: PostBookComponent},
  // { path: 'putbook', component: UpdateABookComponent},
  // { path: 'deletebook', component: DeleteABookComponent}


  {path: 'todoList', children:[
    { path: 'addTodo', component: AddTodoToListComponent },
    { path: 'showTodo', component: ShowTodoListComponent }
  ]}
  // { path: '', redirectTo: 'todoList/showTodo', pathMatch: 'full' },
  // { path: '**', component: Error404Component }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
