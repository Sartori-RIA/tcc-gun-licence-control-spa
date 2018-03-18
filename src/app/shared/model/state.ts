import {Country} from './country';

export class State {

  constructor(public id?: number,
              public description?: string,
              public abbrev?: string,
              public country?: Country) {
  }
}
