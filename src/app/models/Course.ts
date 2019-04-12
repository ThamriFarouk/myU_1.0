import { Evaluation } from './evaluation';

export class Course {
  constructor(
    public name: String,
    public coef: number,
    public unitName: String,
    public Evaluations: Evaluation[]
  ) {
    this.name = name;
    this.coef = coef;
    this.unitName = unitName;
    this.Evaluations = Evaluations;
  }
}
