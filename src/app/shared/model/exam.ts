import {ExamCategory} from "./exam-category";
import {User} from "./user";

export class Exam {

  constructor(public id?: number,
              public data?: Date,
              public status?: boolean,
              public resultDescription?: string,
              public examCategory?: ExamCategory,
              public examinator?: User,
              public civil?: User) {
  }
}
