export class StudentResults {
  constructor(
    public average,
    public classe,
    public decision,
    public avgBeforeInternship,
    public session,
    public schoolYear,
    public type,
    public mention
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
    if (this.avgBeforeInternship === '') {
      this.avgBeforeInternship = '~';
    }
    if (this.mention === '') {
      this.mention = '~';
    }
  }
}
