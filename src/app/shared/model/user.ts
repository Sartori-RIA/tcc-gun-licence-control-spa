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
              public password?: string,
              public email?: string,
              public role?: UserRole,
              public addressList?: Address[]) {
  }
}
