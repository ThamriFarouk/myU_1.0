import { Seance } from './seance';

export class Attendance {
  private nbAbsence: number;
  private seances: Seance[];
  constructor(nbAbsence, seances) {
    this.nbAbsence = nbAbsence;
    this.seances = seances;
  }

  public getSeances(): Seance[] {
    return this.seances;
  }

  public setSeances(value: Seance[]) {
    this.seances = value;
  }

  public getNbAbsence(): number {
    return this.nbAbsence;
  }

  public setNbAbsence(value: number) {
    this.nbAbsence = value;
  }
}
