export class ClassCalendar {
  public id: String;
  public classe: String;
  public name: String;
  public schoolYear: String;
  public seances: Object;

  constructor(id, classe, name, schoolYear, seances) {
    this.id = id;
    this.classe = classe;
    this.name = name;
    this.schoolYear = schoolYear;
    this.seances = seances;
  }
}
