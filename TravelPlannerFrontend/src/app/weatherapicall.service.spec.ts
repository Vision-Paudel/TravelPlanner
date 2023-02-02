import { TestBed } from '@angular/core/testing';
import { WeatherapicallService } from './weatherapicall.service';

describe('WeatherapicallService', () => {
  let service: WeatherapicallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherapicallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});


