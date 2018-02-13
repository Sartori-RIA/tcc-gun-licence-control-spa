/**
 * Created by sartori on 19/04/17.
 */

import {UserRole} from "./user-role";
import {Gender} from "./gender";
import {Address} from "./address";

export class User {

  constructor(public id?: number,
              public name?: string,
              public gender?: Gender,
              public dateOfBirth?: Date,
              public cpf?: string,
              public rg?: string,
              public rgIssuingBody?: string,
              public rgUf?: string,
              public password?: string,
              public email?: string,
              public role?: UserRole,
              public mothersName?: string,
              public fathersName?: string,
              public nationality?: string,
              public naturalness?: string,
              public criminalRecors?: boolean,
              public respondingProcess?: boolean,
              public addressList?: Address[]) {
  }
}
