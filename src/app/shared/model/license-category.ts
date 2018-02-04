import {Requirement} from "./requirement";

export class LicenseCategory {

  constructor(public id?: number,
              public description?: string,
              public requirement?: Requirement) {
  }
}
