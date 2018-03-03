import {Injectable} from '@angular/core';
import {License} from "../model/license";

@Injectable()
export class PrintfPdfService {

  constructor() {
  }

  printPDF(model: License) {
    let html = ""
    window.open(html)

  }
}
