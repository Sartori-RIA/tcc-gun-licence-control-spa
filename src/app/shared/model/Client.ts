import {User} from "./User";
import {Injectable} from "@angular/core";

/**
 * Created by sartori on 19/04/17.
 */
@Injectable()
export class Client {

  constructor(
    public name?: string,
    public sex?: string,
    public address?: string,
    public dateOfBirth?: string,
    public cpf?: string,
    public cep?: string,
    public city?: string,
    public neighborhood?: string,
    public addressNumber?: string,
    public id?: number
  ) {

  }
}
