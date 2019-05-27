export class ProfCalendar {

    public id: String;
    public prof: String;
    public name: String;
    public schoolYear: String;
    public seances: String;

    constructor(id, prof, name, schoolYear, seances) {
    this.id = id;
    this.prof = prof;
    this.name = name;
    this.schoolYear = schoolYear;
    this.seances = seances;
  }

}
