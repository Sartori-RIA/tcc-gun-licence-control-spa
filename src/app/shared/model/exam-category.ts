import {UserRole} from './user-role';

export class ExamCategory {

  constructor(public id?: number,
              public description?: string,
              public role?: UserRole) {
  }
}
