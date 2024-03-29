import { Evaluation } from './evaluation';

export class Course {
  public name: String;
  public coef: number;
  public unitName: String;
  public Evaluations: Evaluation[];
  constructor(name, coef, unitName, Evaluations) {
    this.name = name;
    this.coef = coef;
    this.unitName = unitName;
    this.Evaluations = Evaluations;
  }

  public getName(): String {
    return this.name;
  }

  public getCoef(): number {
    return this.coef;
  }

  public getUnitName(): String {
    return this.unitName;
  }

  public getEvaluations(): Evaluation[] {
    return this.Evaluations;
  }

  public setName(value: String) {
    this.name = value;
  }

  public setCoef(value: number) {
    this.coef = value;
  }

  public setUnitName(value: String) {
    this.unitName = value;
  }

  public setEvaluations(value: Evaluation[]) {
    this.Evaluations = value;
  }
}
