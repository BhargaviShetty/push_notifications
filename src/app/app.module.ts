import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateBookModule } from './create-book/create-book.module';
import { DeleteBookModule } from './delete-book/delete-book.module';
import { GetBooksModule } from './get-books/get-books.module';
import { LandingModule } from './landing/landing.module';
import { UpdateBookModule } from './update-book/update-book.module';
import { HttpClientModule } from '@angular/common/http';
import { TodoModule } from './todo/todo.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SharedNavbarModule } from './shared-navbar/shared-navbar.module';
import { TodoListModule } from './todo-list/todo-list.module';
import { TestComponent } from './test/test.component';
// import { ChartsModule, ThemeService } from 'ng2-charts';



@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    CreateBookModule,
    DeleteBookModule,
    GetBooksModule,
    LandingModule,
    UpdateBookModule,
    TodoModule,
    SharedNavbarModule,
    TodoListModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
