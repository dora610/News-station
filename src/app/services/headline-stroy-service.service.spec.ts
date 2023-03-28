import { TestBed } from '@angular/core/testing';

import { HeadlineStroyServiceService } from './headline-stroy-service.service';

describe('HeadlineStroyServiceService', () => {
  let service: HeadlineStroyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeadlineStroyServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
