import { TestBed } from '@angular/core/testing';

import { PageOupsGuard } from './page-oups.guard';

describe('PageOupsGuard', () => {
  let guard: PageOupsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PageOupsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
