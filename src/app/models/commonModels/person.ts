export class Person {
  public fullName: String;
  public id: number;
  public birthPlace: String;
  public birthDate: String;
  public Nationality: String;
  public CIN: String;
  public PassportNumber: String;
  public SchoolName: String;
  public DepartmentName: String;

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
    this.fullName = fullName;
    this.id = id;
    this.birthPlace = birthPlace;
    this.birthDate = birthDate;
    this.Nationality = Nationality;
    this.CIN = CIN;
    this.PassportNumber = PassportNumber;
    this.SchoolName = SchoolName;
    this.DepartmentName = DepartmentName;
  }

  public getFullName(): String {
    return this.fullName;
  }

  public getId(): number {
    return this.id;
  }

  public getBirthPlace(): String {
    return this.birthPlace;
  }

  public getBirthDate(): String {
    return this.birthDate;
  }

  public getNationality(): String {
    return this.Nationality;
  }

  public getCIN(): String {
    return this.CIN;
  }

  public getPassportNumber(): String {
    return this.PassportNumber;
  }

  public getSchoolName(): String {
    return this.SchoolName;
  }

  public getDepartmentName(): String {
    return this.DepartmentName;
  }

  public setFullName(value: String) {
    this.fullName = value;
  }

  public setId(value: number) {
    this.id = value;
  }

  public setBirthPlace(value: String) {
    this.birthPlace = value;
  }

  public setBirthDate(value: String) {
    this.birthDate = value;
  }

  public setNationality(value: String) {
    this.Nationality = value;
  }

  public setCIN(value: String) {
    this.CIN = value;
  }

  public setPassportNumber(value: String) {
    this.PassportNumber = value;
  }

  public setSchoolName(value: String) {
    this.SchoolName = value;
  }

  public setDepartmentName(value: String) {
    this.DepartmentName = value;
  }
}
