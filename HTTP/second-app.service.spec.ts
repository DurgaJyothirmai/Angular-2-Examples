import { TestBed, inject } from '@angular/core/testing';

import { SecondAppService } from './second-app.service';

describe('SecondAppService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SecondAppService]
    });
  });

  it('should ...', inject([SecondAppService], (service: SecondAppService) => {
    expect(service).toBeTruthy();
  }));
});
