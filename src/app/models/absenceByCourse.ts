export class AbsenceByCourse {
  private nbAbsenceMax: number;
  private course: String;
  constructor(nbAbsenceMax, course) {
    this.nbAbsenceMax = nbAbsenceMax;
    this.course = course;
  }

  public getNbAbsenceMax(): number {
    return this.nbAbsenceMax;
  }

  public getCourse(): String {
    return this.course;
  }

  public setNbAbsenceMax(value: number) {
    this.nbAbsenceMax = value;
  }

  public setCourse(value: String) {
    this.course = value;
  }
}
