import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDescComponent } from './todo-desc.component';

describe('TodoDescComponent', () => {
  let component: TodoDescComponent;
  let fixture: ComponentFixture<TodoDescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoDescComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
