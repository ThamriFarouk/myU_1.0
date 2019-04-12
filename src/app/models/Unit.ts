import { Course } from './Course';

export class Unit {
  constructor(
    public name: string,
    public coef: number,
    public Courses: Course[]
  ) {
    this.name = name;
    this.coef = coef;
    this.Courses = Courses;
  }
}
