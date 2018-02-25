import {User} from "./user";
import {LicenseCategory} from "./license-category";
import {Exam} from "./exam";
import {Address} from "./address";

export class License {

  constructor(public id?: number,
              public serial?: string,
              public category?: LicenseCategory,
              public shelfLife?: Date,
              public status?: boolean,
              public user?: User,
              public examList?: Exam[],
              public address?: Address) {
  }
}
