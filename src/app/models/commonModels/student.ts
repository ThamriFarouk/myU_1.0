import { Person } from './person';

export class Student extends Person {
  constructor(
    fullName,
    id,
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
  }
}
