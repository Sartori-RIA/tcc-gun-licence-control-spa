import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'rg'
})
export class RgPipe implements PipeTransform {

  transform(value: string) {
    if (value) {
      value = value.toString();
      if (value.length === 8) {
        return value.substring(0, 2).concat(".")
          .concat(value.substring(2, 4))
          .concat(".")
          .concat(value.substring(4, 7))
          .concat("-")
          .concat(value.substring(7, 8))
      }
    }
    return value;
  }
}
