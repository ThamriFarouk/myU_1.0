import { Person } from './person';

export class Student extends Person {
  classId;
  email;
  photo;
  constructor(
    fullName,
    id,
    classId,
    email,
    birthPlace,
    birthDate,
    Nationality,
    CIN,
    PassportNumber,
    SchoolName,
    DepartmentName,
    photo,
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
    this.email = email;
    this.photo = photo;
  }
}
