import { Teacher } from 'src/app/models/commonModels/teacher';

export class TeacherByClasse {
  private classId: number;
  private className: String;
  private professors: Teacher[];

  constructor(classId, className, professors) {
    this.classId = classId;
    this.className = className;
    this.professors = professors;
  }

  public getClassId(): number {
    return this.classId;
  }

  public setClassId(value: number) {
    this.classId = value;
  }

  public getClassName(): String {
    return this.className;
  }

  public setClassName(value: String) {
    this.className = value;
  }

  public getProfessors(): Teacher[] {
    return this.professors;
  }

  public setProfessors(value: Teacher[]) {
    this.professors = value;
  }
}
