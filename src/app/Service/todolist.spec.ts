import { TestBed } from '@angular/core/testing';

import { Todolist } from './todolist';

describe('Todolist', () => {
  let service: Todolist;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Todolist);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
