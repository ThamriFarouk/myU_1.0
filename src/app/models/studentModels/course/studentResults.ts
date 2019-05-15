export class StudentResults {
  private average: String;
  private classe: String;
  private decision: String;
  private avgBeforeInternship: String;
  private session: String;
  private schoolYear: String;
  private type: String;
  private mention: String;
  constructor(
    average,
    classe,
    decision,
    avgBeforeInternship,
    session,
    schoolYear,
    type,
    mention
  ) {
    this.average = average;
    this.classe = classe;
    this.decision = decision;
    this.avgBeforeInternship = avgBeforeInternship;
    this.session = session;
    this.schoolYear = schoolYear;
    this.type = type;
    this.mention = mention;
  }

  test() {
    if (
      this.avgBeforeInternship === '' ||
      this.avgBeforeInternship === '0,00'
    ) {
      this.avgBeforeInternship = '~';
    }
    if (this.mention === '') {
      this.mention = '~';
    }
    if (this.average === '0,00') {
      this.average = '~';
    }
  }

  public getAverage(): String {
    return this.average;
  }

  public setAverage(value: String) {
    this.average = value;
  }

  public getClasse(): String {
    return this.classe;
  }

  public getDecision(): String {
    return this.decision;
  }

  public getAvgBeforeInternship(): String {
    return this.avgBeforeInternship;
  }

  public getSession(): String {
    return this.session;
  }

  public getSchoolYear(): String {
    return this.schoolYear;
  }

  public getType(): String {
    return this.type;
  }

  public getMention(): String {
    return this.mention;
  }

  public setClasse(value: String) {
    this.classe = value;
  }

  public setDecision(value: String) {
    this.decision = value;
  }

  public setAvgBeforeInternship(value: String) {
    this.avgBeforeInternship = value;
  }

  public setSession(value: String) {
    this.session = value;
  }

  public setSchoolYear(value: String) {
    this.schoolYear = value;
  }

  public setType(value: String) {
    this.type = value;
  }

  public setMention(value: String) {
    this.mention = value;
  }
}
