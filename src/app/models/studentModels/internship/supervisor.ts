import { Person } from 'src/app/models/commonModels/person';

export class Supervisor extends Person {
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
