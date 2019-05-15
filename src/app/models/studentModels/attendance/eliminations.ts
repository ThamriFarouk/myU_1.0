export class Eliminations {
  private course: String;
  private nbabsences: number;
  private maxAbsencesAllowed: number;
  constructor(course, nbabsences, maxAbsencesAllowed) {
    this.course = course;
    this.nbabsences = nbabsences;
    this.maxAbsencesAllowed = maxAbsencesAllowed;
  }

  isEliminated() {
    if (this.nbabsences >= this.maxAbsencesAllowed) {
      return true;
    } else {
      return false;
    }
  }

  public getCourse(): String {
    return this.course;
  }

  public getNbabsences(): number {
    return this.nbabsences;
  }

  public getMaxAbsencesAllowed(): number {
    return this.maxAbsencesAllowed;
  }

  public setCourse(value: String) {
    this.course = value;
  }

  public setNbabsences(value: number) {
    this.nbabsences = value;
  }

  public setMaxAbsencesAllowed(value: number) {
    this.maxAbsencesAllowed = value;
  }
}
