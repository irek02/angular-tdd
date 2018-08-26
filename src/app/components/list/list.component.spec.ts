import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { TodoService } from '../../services/todo.service';

class TodoServiceMock {
  getTodos() {}
}

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let todoServiceMock: TodoService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListComponent ],
      providers: [
        { provide: TodoService, useClass: TodoServiceMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;

    todoServiceMock = TestBed.get(TodoService);
  });

  it('should display a list of todos', () => {

    spyOn(todoServiceMock, 'getTodos').and.returnValue(['one', 'two', 'three']);

    fixture.detectChanges();

    expect(fixture.nativeElement.querySelectorAll('.todo').length).toBe(3);

  });
});
