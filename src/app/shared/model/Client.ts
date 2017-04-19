import {User} from "./User";
import {Injectable} from "@angular/core";
/**
 * Created by sartori on 19/04/17.
 */
@Injectable()
export class Client {

  constructor(public name?: string, public id?: number) {

  }
}
