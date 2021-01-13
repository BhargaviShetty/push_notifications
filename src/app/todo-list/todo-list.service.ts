import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  todos: Array<string> = [];

  readonly url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { 

  }

  addTodos(todo: string){
    this.todos.push(todo);
  }

  getTodos(){
    return this.todos;
  }

  getObs(){
    return new Observable((observer) => {
      observer.next([1, 2, 3, 4, 5]),
      observer.error('err'),
      observer.complete();
    })
  }

  getData(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts').pipe(
      map((res) => {
        let resp:any = res;
        return from(resp);
      })
    )
  }

}
