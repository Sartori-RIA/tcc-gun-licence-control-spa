import {User} from "./user";
import {LicenseCategory} from "./license-category";
import {Exam} from "./exam";

export class License {

  constructor(public id?: number,
              public serial?: string,
              public description?: string,
              public category?: LicenseCategory,
              public shelfLife?: Date,
              public status?: boolean,
              public user?: User,
              public examList?: Exam[]) {
  }
}
