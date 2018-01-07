/**
 * Created by sartori on 19/04/17.
 */

import {UserRole} from "./user-role";
import {Gender} from "./gender";

export class User {

  constructor(public name?: string,
              public gender?: Gender,
              public street?: string,
              public dateOfBirth?: Date,
              public cpf?: string,
              public cep?: string,
              public state?: string,
              public city?: string,
              public neighborhood?: string,
              public addressNumber?: string,
              public id?: number,
              public password?: string,
              public email?: string,
              public role?: UserRole,
              public complement?: string) {

  }
}
