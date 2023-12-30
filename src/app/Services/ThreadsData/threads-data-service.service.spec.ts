import { TestBed } from '@angular/core/testing';

import { ThreadsDataService } from './threads-data.service';

describe('ThreadsDataServiceService', () => {
  let service: ThreadsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThreadsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
