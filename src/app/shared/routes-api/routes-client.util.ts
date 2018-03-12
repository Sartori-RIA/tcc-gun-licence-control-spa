/**
 * Created by sartori on 16/03/17.
 */
import {environment} from "../../../environments/environment";

export class RoutesClientUtil {

  static USERS = environment.apiURL + 'users/';
  static EXAMS = environment.apiURL + 'exams/';
  static EXAMS_TYPES = environment.apiURL + 'exams-types/';
  static GUNS = environment.apiURL + 'guns/';
  static LICENSES = environment.apiURL + 'licenses/';
  static LICENSES_TYPES = environment.apiURL + 'licenses-types/';
  static LOGIN = environment.apiURL + 'login/';
  static LVL_ACCESS = environment.apiURL + 'users-roles/';
  static SEX = environment.apiURL + 'genders/';
  static VALIDATOR = environment.apiURL + 'validator/';

  static COUNTRIES = environment.apiURL + 'countries/';
  static STATES = environment.apiURL + 'states/';
  static CITIES = environment.apiURL + 'cities/';
  static ADDRESS = environment.apiURL + 'address/';
  static REQUIREMENTS = environment.apiURL + 'requirements/';
}
