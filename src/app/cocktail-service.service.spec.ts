import { TestBed } from '@angular/core/testing';

import { CocktailServiceService } from './cocktail-service.service';

describe('CocktailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CocktailServiceService = TestBed.get(CocktailServiceService);
    expect(service).toBeTruthy();
  });
});
