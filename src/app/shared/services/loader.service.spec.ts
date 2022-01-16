import { TestBed } from '@angular/core/testing';

import { LoaderService } from './loader.service';

describe('LoaderService', () => {
  let service: LoaderService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoaderService]
    });
    service = TestBed.inject(LoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should run #show()', () => {
    service.show();
    expect(service.show).toBeDefined();
  });
  it('should run #hide()', () => {
    service.hide();
    expect(service.hide).toBeDefined();
  });
});
