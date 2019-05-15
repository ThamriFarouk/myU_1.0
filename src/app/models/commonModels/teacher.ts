import { Person } from 'src/app/models/commonModels/person';

export class Teacher extends Person {
  private classId: String;
  private evaluation: String;
  private course: String;

  constructor(
    id,
    classId,
    fullName,
    evaluation,
    course,
    birthPlace,
    birthDate,
    Nationality,
    CIN,
    PassportNumber,
    SchoolName,
    DepartmentName
  ) {
    super(
      fullName,
      id,
      birthPlace,
      birthDate,
      Nationality,
      CIN,
      PassportNumber,
      SchoolName,
      DepartmentName
    );
    this.classId = classId;
    this.evaluation = evaluation;
    this.course = course;
  }

  public hetId() {
    return 1;
  }

  public setId(value: number) {
    super.setId(value);
  }

  public getFullName(): String {
    return super.getFullName();
  }

  public setFullName(value: String) {
    super.setFullName(value);
  }

  public getClassId(): String {
    return this.classId;
  }

  public setClassId(value: String) {
    this.classId = value;
  }

  public getEvaluation(): String {
    return this.evaluation;
  }

  public setEvaluation(value: String) {
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
