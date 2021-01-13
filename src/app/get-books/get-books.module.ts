import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetAllBooksComponent } from './get-all-books/get-all-books.component';
import { GetABookComponent } from './get-a-book/get-a-book.component';



@NgModule({
  declarations: [GetAllBooksComponent, GetABookComponent],
  imports: [
    CommonModule
  ]
})
export class GetBooksModule { }
