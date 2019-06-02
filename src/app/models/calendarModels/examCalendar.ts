export class ExamCalendar {
  public id: String;
  public classe: String;
  public name: String;
  public schoolYear: String;
  public exams: Object;

  constructor(id, classe, name, schoolYear, exams) {
    this.id = id;
    this.classe = classe;
    this.name = name;
    this.schoolYear = schoolYear;
    this.exams = exams;
  }
}
