import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(private router:Router) {

   }

  ngOnInit(): void {
  }

  getAllBooks(){
    this.router.navigate(['getbooks']);
  }

  getABook(){
    this.router.navigate(['getbook']);
  }

  postABook(){
    this.router.navigate(['postbook']);
  }

  updateABook(){
    this.router.navigate(['putbook']);
  }

  deleteABook(){
    this.router.navigate(['deletebook']);
  }

  goToTodo(){
    this.router.navigate(['addtodo']);
  }

}
