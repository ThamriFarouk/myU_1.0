import { Course } from './course';

export class Unit {
  private name: string;
  private coef: number;
  private Courses: Course[];
  constructor(name, coef, Courses) {
    this.name = name;
    this.coef = coef;
    this.Courses = Courses;
  }

  public getName(): string {
    return this.name;
  }

  public getCoef(): number {
    return this.coef;
  }

  public getCourses(): Course[] {
    return this.Courses;
  }

  public setName(value: string) {
    this.name = value;
  }

  public setCoef(value: number) {
    this.coef = value;
  }

  public setCourses(value: Course[]) {
    this.Courses = value;
  }
}
