import { Teacher } from './teacher';

export class TeacherByCourse {
  private course: String;
  private professors: Teacher[];
  constructor(course, professors) {
    this.course = course;
    this.professors = professors;
  }

  public getCourse(): String {
    return this.course;
  }

  public setCourse(value: String) {
    this.course = value;
  }

  public getProfessors(): Teacher[] {
    return this.professors;
  }

  public setProfessors(value: Teacher[]) {
    this.professors = value;
  }
}
