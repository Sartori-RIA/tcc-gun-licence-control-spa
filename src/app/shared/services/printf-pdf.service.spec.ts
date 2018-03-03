import { TestBed, inject } from '@angular/core/testing';

import { PrintfPdfService } from './printf-pdf.service';

describe('PrintfPdfService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrintfPdfService]
    });
  });

  it('should be created', inject([PrintfPdfService], (service: PrintfPdfService) => {
    expect(service).toBeTruthy();
  }));
});
