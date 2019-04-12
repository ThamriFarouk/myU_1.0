export class Seance {
  constructor(
    public date,
    public classe,
    public professor,
    public course,
    public startTime,
    public endTime,
    public nbAbsByCourseMax
  ) {
    this.date = date;
    this.classe = classe;
    this.professor = professor;
    this.course = course;
    this.startTime = startTime;
    this.endTime = endTime;
    this.nbAbsByCourseMax = nbAbsByCourseMax;
  }

  // test() {
  //     if(this.avgBeforeInternship === '') {
  //         this.avgBeforeInternship = '~';
  //     }
  //     if(this.mention === '') {
  //         this.mention = '~';
  //     }
  // }
}
