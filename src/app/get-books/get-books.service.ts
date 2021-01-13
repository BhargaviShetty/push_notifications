import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GetBooksService {

  readonly url;

  constructor( private http: HttpClient, private router: Router) {
    this.url = 'http://localhost:3000/book';
   }

  getAllTheBooks(){
    return this.http.get(`${this.url}/books`);
  }

  
}
