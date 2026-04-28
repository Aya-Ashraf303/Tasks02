import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoFilterOptions } from './todo-filter-options';

describe('TodoFilterOptions', () => {
  let component: TodoFilterOptions;
  let fixture: ComponentFixture<TodoFilterOptions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoFilterOptions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoFilterOptions);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
