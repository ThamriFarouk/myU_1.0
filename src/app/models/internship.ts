import { Meeting } from './meeting';
import { Supervisor } from './supervisor';
import { Teacher } from './teacher';
import { Student } from './student';

export class Internship {
  private id: number;
  private internshipType: String;
  private internshipNature: String;
  private startDate: String;
  private endDate: String;
  private organisation: String;
  private students: Student[] = [];
  private internshipTerritory: String;
  private published: String;
  private title: String;
  private professors: Teacher[] = [];
  private schoolYear: String;
  private meetings: Meeting[] = [];
  private internshipUnit: String;
  private supervisor: Supervisor[] = [];
  private status: String;
  constructor(
    id,
    internshipType,
    internshipNature,
    startDate,
    endDate,
    organisation,
    students,
    internshipTerritory,
    published,
    title,
    professors,
    schoolYear,
    meetings,
    internshipUnit,
    supervisor,
    status
  ) {
    this.id = id;
    this.internshipType = internshipType;
    this.internshipNature = internshipNature;
    this.startDate = startDate;
    this.endDate = endDate;
    this.organisation = organisation;
    this.students = students;
    this.internshipTerritory = internshipTerritory;
    this.published = published;
    this.title = title;
    this.professors = professors;
    this.schoolYear = schoolYear;
    this.meetings = meetings;
    this.internshipUnit = internshipUnit;
    this.supervisor = supervisor;
    this.status = status;
  }

  public checkEmptiness() {
    if (this.getProfessors().length === 0) {
      this.professors.push(
        new Teacher(
          undefined,
          undefined,
          // tslint:disable-next-line:quotemark
          "Pas d'enseignant assigné pour l'instant",
          undefined,
          undefined
        )
      );
    }
    if (this.getStudents().length === 0) {
      this.students.push(
        // tslint:disable-next-line:quotemark
        new Student("Pas d'étudiant assigné pour l'instant", undefined)
      );
    }
    if (this.getSupervisor().length === 0) {
      this.supervisor.push(
        // tslint:disable-next-line:quotemark
        new Supervisor("Pas de superviseur assigné pour l'instant", undefined)
      );
    }
    if (this.getMeetings().length === 0) {
      this.meetings.push(
        new Meeting(
          // tslint:disable-next-line:quotemark
          "Pas de réunion fixé pour l'instant",
          '~',
          null,
          '~',
          '~',
          '~'
        )
      );
    }
    // console.log(this);
  }

  public getId(): number {
    return this.id;
  }

  public getInternshipType(): String {
    return this.internshipType;
  }

  public getInternshipNature(): String {
    return this.internshipNature;
  }

  public getStartDate(): String {
    return this.startDate;
  }

  public getEndDate(): String {
    return this.endDate;
  }

  public getOrganisation(): String {
    return this.organisation;
  }

  public getStudents(): Student[] {
    return this.students;
  }

  public getInternshipTerritory(): String {
    return this.internshipTerritory;
  }

  public getPublished(): String {
    return this.published;
  }

  public getTitle(): String {
    return this.title;
  }

  public getProfessors(): Teacher[] {
    return this.professors;
  }

  public getSchoolYear(): String {
    return this.schoolYear;
  }

  public getMeetings(): Meeting[] {
    return this.meetings;
  }

  public getInternshipUnit(): String {
    return this.internshipUnit;
  }

  public getSupervisor(): Supervisor[] {
    return this.supervisor;
  }

  public getStatus(): String {
    return this.status;
  }

  public setId(value: number) {
    this.id = value;
  }

  public setInternshipType(value: String) {
    this.internshipType = value;
  }

  public setInternshipNature(value: String) {
    this.internshipNature = value;
  }

  public setStartDate(value: String) {
    this.startDate = value;
  }

  public setEndDate(value: String) {
    this.endDate = value;
  }

  public setOrganisation(value: String) {
    this.organisation = value;
  }

  public setStudents(value: Student[]) {
    this.students = value;
  }

  public setInternshipTerritory(value: String) {
    this.internshipTerritory = value;
  }

  public setPublished(value: String) {
    this.published = value;
  }

  public setTitle(value: String) {
    this.title = value;
  }

  public setProfessors(value: Teacher[]) {
    this.professors = value;
  }

  public setSchoolYear(value: String) {
    this.schoolYear = value;
  }

  public setMeetings(value: Meeting[]) {
    this.meetings = value;
  }

  public setInternshipUnit(value: String) {
    this.internshipUnit = value;
  }

  public setSupervisor(value: Supervisor[]) {
    this.supervisor = value;
  }

  public setStatus(value: String) {
    this.status = value;
  }
}
