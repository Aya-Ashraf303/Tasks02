import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task01 } from './task01';

describe('Task01', () => {
  let component: Task01;
  let fixture: ComponentFixture<Task01>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Task01]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Task01);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
