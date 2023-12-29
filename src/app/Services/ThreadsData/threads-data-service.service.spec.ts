import { TestBed } from '@angular/core/testing';

import { ThreadsDataServiceService } from './threads-data-service.service';

describe('ThreadsDataServiceService', () => {
  let service: ThreadsDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThreadsDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
