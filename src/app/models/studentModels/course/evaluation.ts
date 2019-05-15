export class Evaluation {
  public name: string;
  public courseName: string;
  public note: number;
  constructor(name, courseName, note) {
    this.name = name;
    this.courseName = courseName;
    this.note = note;
  }

  public getName(): string {
    return this.name;
  }

  public getCourseName(): string {
    return this.courseName;
  }

  public getNote(): number {
    return this.note;
  }

  public setName(value: string) {
    this.name = value;
  }

  public setCourseName(value: string) {
    this.courseName = value;
  }

  public setNote(value: number) {
    this.note = value;
  }
}
