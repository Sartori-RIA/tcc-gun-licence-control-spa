/**
 * Created by sartori on 19/04/17.
 */

import {UserRole} from "./user-role";
import {Sex} from "./sex";

export class User {

  constructor(
    public name?: string,
    public sex?: Sex,
    public street?: string,
    public dateOfBirth?: string,
    public cpf?: string,
    public cep?: string,
    public state?: string,
    public city?: string,
    public neighborhood?: string,
    public addressNumber?: string,
    public id?: number,
    public password?: string,
    public email?: string,
    public role?: Array<UserRole>,
    public complement?: string
  ){

  }
}
