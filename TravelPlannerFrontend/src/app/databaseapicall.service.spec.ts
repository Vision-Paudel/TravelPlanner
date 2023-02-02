import { TestBed } from '@angular/core/testing';
import { DatabaseapicallService } from './databaseapicall.service';

describe('DatabaseapicallService', () => {
  let service: DatabaseapicallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatabaseapicallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
