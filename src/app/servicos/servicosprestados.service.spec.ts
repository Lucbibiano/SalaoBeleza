import { TestBed, inject } from '@angular/core/testing';

import { ServicosprestadosService } from './servicosprestados.service';

describe('ServicosprestadosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicosprestadosService]
    });
  });

  it('should be created', inject([ServicosprestadosService], (service: ServicosprestadosService) => {
    expect(service).toBeTruthy();
  }));
});
