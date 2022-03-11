import { TestBed } from '@angular/core/testing';

import { GetAllTasksService } from './get-all-tasks.service';

describe('GetAllTasksService', () => {
  let service: GetAllTasksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllTasksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
