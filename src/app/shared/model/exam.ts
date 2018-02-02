import {ExamCategory} from "./exam-category";

export class Exam {

  constructor(public id?: number,
              public data?: Date,
              public status?: string,
              public resultDescription?: string,
              public examCategory?: ExamCategory) {
  }
}
