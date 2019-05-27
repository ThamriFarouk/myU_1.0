export class ProfExamCalendar {
  public id: String;
  public prof: String;
  public name: String;
  public schoolYear: String;
  public exams: String;

  constructor(id, prof, name, schoolYear, exams) {
    this.id = id;
    this.prof = prof;
    this.name = name;
    this.schoolYear = schoolYear;
    this.exams = exams;
  }
}
