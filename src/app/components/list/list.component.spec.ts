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

  it('should display empty message when there are no todos', () => {

    spyOn(todoServiceMock, 'getTodos').and.returnValue([]);

    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.empty')).toBeTruthy();

  });

  it('should not display empty message when there are todos', () => {

    spyOn(todoServiceMock, 'getTodos').and.returnValue(['one']);

    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.empty')).toBeFalsy();

  });

});
