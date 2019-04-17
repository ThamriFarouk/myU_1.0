import { Meeting } from './meeting';
import { Supervisor } from './supervisor';

export class Internship {
  constructor(
    public id: number,
    public internshipType: String,
    public internshipNature: String,
    public startDate: String,
    public endDate: String,
    public organisation: String,
    public students: String,
    public internshipTerritory: String,
    public published: String,
    public title: String,
    public professors: String,
    public schoolYear: String,
    public meetings: Meeting[],
    public internshipUnit: String,
    public supervisor: Supervisor[],
    public status: String
  ) {}
}
