import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTodoToListComponent } from './add-todo-to-list.component';

describe('AddTodoToListComponent', () => {
  let component: AddTodoToListComponent;
  let fixture: ComponentFixture<AddTodoToListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTodoToListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTodoToListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
