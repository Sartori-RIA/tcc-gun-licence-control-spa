import {City} from "./city";

export class Address {

  constructor(public id?: number,
              public cep?: string,
              public street?: string,
              public neighborhood?: string,
              public addressNumber?: string,
              public complement?: string,
              public city?: City) {
  }
}
