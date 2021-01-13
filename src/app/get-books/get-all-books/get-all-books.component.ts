import { Component, OnInit } from '@angular/core';
import { GetBooksService } from '../get-books.service';

@Component({
  selector: 'app-get-all-books',
  templateUrl: './get-all-books.component.html',
  styleUrls: ['./get-all-books.component.scss']
})
export class GetAllBooksComponent implements OnInit {

  res;
  books;

  constructor(private getBooksService: GetBooksService) { 

  }

  ngOnInit(): void {
    this.getAllBooks();
  }

  getAllBooks(){
    this.getBooksService.getAllTheBooks().subscribe((data) => {
      this.res = data;
      this.books = this.res.data;
      console.log(this.books);
    });
  }

}
