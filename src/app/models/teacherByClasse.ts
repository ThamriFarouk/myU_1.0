import { Teacher } from './teacher';

export class TeacherByClasse {
  constructor(public classId, public className, public professors: Teacher[]) {
    this.classId = classId;
    this.className = className;
    this.professors = professors;
  }
}
