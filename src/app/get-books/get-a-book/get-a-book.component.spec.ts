import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetABookComponent } from './get-a-book.component';

describe('GetABookComponent', () => {
  let component: GetABookComponent;
  let fixture: ComponentFixture<GetABookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetABookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetABookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
