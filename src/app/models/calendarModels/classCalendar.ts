export class ClassCalendar {

    public id: String;
    public class: String;
    public name: String;
    public schoolYear: String;
    public seances: String;

    constructor(id, class, name, schoolYear, seances) {
    this.id = id;
    this.class = class;
    this.name = name;
    this.schoolYear = schoolYear;
    this.seances = seances;
  }
}
