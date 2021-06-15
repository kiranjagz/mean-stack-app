import { TestBed } from '@angular/core/testing';

import { MathService } from './math.service';

describe('MathService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MathService = TestBed.get(MathService);
    expect(service).toBeTruthy();
  });

  it('add two numbers', () => {
    debugger;
    const service: MathService = TestBed.get(MathService);
    expect(service.addNumbers(1,2)).toEqual(3);
  });
});
