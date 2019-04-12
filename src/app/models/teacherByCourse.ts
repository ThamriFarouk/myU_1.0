import { Teacher } from './teacher';

export class TeacherByCourse {
  constructor(public course, public professors: Teacher[]) {
    this.course = course;
    this.professors = professors;
  }
}
