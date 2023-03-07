import { TestBed } from '@angular/core/testing';

import { CategorieServiceService } from './categorie-service.service';

describe('CategorieServiceService', () => {
  let service: CategorieServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategorieServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
