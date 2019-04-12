import { AbsenceByCourse } from './absenceByCourse';
import { Seance } from './seance';

export class Attendance {
  constructor(public nbAbsence, public seances: Seance[]) {
    this.nbAbsence = nbAbsence;
    this.seances = seances;
  }
}
