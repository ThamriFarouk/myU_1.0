export class Seance {
  private date: String;
  private classe: String;
  private professor: String;
  private course: String;
  private startTime: String;
  private endTime: String;
  private nbAbsByCourseMax: number;
  constructor(
    date,
    classe,
    professor,
    course,
    startTime,
    endTime,
    nbAbsByCourseMax
  ) {
    this.date = date;
    this.classe = classe;
    this.professor = professor;
    this.course = course;
    this.startTime = startTime;
    this.endTime = endTime;
    this.nbAbsByCourseMax = nbAbsByCourseMax;
  }

  public getDate(): String {
    return this.date;
  }

  public getClasse(): String {
    return this.classe;
  }

  public getProfessor(): String {
    return this.professor;
  }

  public getCourse(): String {
    return this.course;
  }

  public getStartTime(): String {
    return this.startTime;
  }

  public getEndTime(): String {
    return this.endTime;
  }

  public getNbAbsByCourseMax(): number {
    return this.nbAbsByCourseMax;
  }

  public setDate(value: String) {
    this.date = value;
  }

  public setClasse(value: String) {
    this.classe = value;
  }

  public setProfessor(value: String) {
    this.professor = value;
  }

  public setCourse(value: String) {
    this.course = value;
  }

  public setStartTime(value: String) {
    this.startTime = value;
  }

  public setEndTime(value: String) {
    this.endTime = value;
  }

  public setNbAbsByCourseMax(value: number) {
    this.nbAbsByCourseMax = value;
  }
}
