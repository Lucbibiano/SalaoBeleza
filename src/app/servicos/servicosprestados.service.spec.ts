import { TestBed, inject } from '@angular/core/testing';

import { ServicoprestadoService} from './servicosprestados.service';

describe('ServicosprestadosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicoprestadoService]
    });
  });

  it('should be created', inject([ServicoprestadoService], (service: ServicoprestadoService) => {
    expect(service).toBeTruthy();
  }));
});
