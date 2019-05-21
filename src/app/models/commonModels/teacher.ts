import { Person } from 'src/app/models/commonModels/person';

export class Teacher extends Person {
  public classId: String;
  public evaluation: String;
  public course: String;
  public photo: String;
  public email: String;

  constructor(
    id,
    classId,
    email,
    fullName,
    evaluation,
    course,
    birthPlace,
    birthDate,
    Nationality,
    CIN,
    PassportNumber,
    SchoolName,
    DepartmentName,
    photo
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
    this.photo = photo;
    this.email = email;
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
