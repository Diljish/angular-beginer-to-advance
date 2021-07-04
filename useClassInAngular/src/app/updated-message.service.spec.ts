import { TestBed } from '@angular/core/testing';

import { UpdatedMessageService } from './updated-message.service';

describe('UpdatedMessageService', () => {
  let service: UpdatedMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdatedMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
