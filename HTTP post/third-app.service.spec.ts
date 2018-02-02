import { TestBed, inject } from '@angular/core/testing';

import { ThirdAppService } from './third-app.service';

describe('ThirdAppService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ThirdAppService]
    });
  });

  it('should ...', inject([ThirdAppService], (service: ThirdAppService) => {
    expect(service).toBeTruthy();
  }));
});
