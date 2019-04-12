export class Teacher {
  constructor(
    public id,
    public classId,
    public fullName,
    public evaluation,
    public course
  ) {
    this.id = id;
    this.classId = classId;
    this.fullName = fullName;
    this.evaluation = evaluation;
    this.course = course;
  }
}
