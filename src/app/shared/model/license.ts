import {User} from "./user";

export class License {

  constructor(public id?: number,
              public serial?: string,
              public description?: string,
              public category?: string,
              public shelfLife?: Date,
              public user?: User) {
  }
}
