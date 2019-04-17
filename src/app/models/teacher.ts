import { inherits } from 'util';
import { Person } from './person';

export class Teacher extends Person {
  private classId: number;
  private evaluation: number;
  private course: String;

  constructor(id, classId, fullName, evaluation, course) {
    super(fullName, id);
    this.classId = classId;
    this.evaluation = evaluation;
    this.course = course;
  }

  public getClassId(): number {
    return this.classId;
  }

  public setClassId(value: number) {
    this.classId = value;
  }

  public getEvaluation(): number {
    return this.evaluation;
  }

  public setEvaluation(value: number) {
    this.evaluation = value;
  }

  public getCourse(): String {
    return this.course;
  }

  public setCourse(value: String) {
    this.course = value;
  }

  getCourseType() {
    const i = this.course.indexOf('(');
    const courseType = this.course.slice(i, this.course.length);
    return courseType;
  }
}
