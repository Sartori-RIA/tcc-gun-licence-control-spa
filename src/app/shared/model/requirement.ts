import {ExamCategory} from "./exam-category";

export class Requirement {

  constructor(public id?: number,
              public minimalAge?: number,
              public exams?: ExamCategory[]) {
  }
}
