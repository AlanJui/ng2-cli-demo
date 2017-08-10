import { TestBed, inject } from '@angular/core/testing';

import { MakeService } from '../vehicle-form/make.service';

describe('MakeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MakeService]
    });
  });

  it('should be created', inject([MakeService], (service: MakeService) => {
    expect(service).toBeTruthy();
  }));
});
