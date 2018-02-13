import {ExamCategory} from "./exam-category";

export class Requirement {

  constructor(public id?: number,
              public minimalAge?: number,
              public criminalRecors?: boolean,
              public respondingProcess?: boolean,
              public exams?: ExamCategory[]) {
  }
}
