export class SchoolCalendar {
  public id: String;
  public school: String;
  public name: String;
  public schoolYear: String;
  public seances: String;

  constructor(id, school, name, schoolYear, seances) {
    this.id = id;
    this.school = school;
    this.name = name;
    this.schoolYear = schoolYear;
    this.seances = seances;
  }
}
