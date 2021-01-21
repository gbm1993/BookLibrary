import { TestBed } from '@angular/core/testing';

import { BooklibService } from './booklib.service';

describe('BooklibService', () => {
  let service: BooklibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooklibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
