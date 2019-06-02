export class ClassFeed {
  public id: String;
  public classe: String;
  public school: String;
  public department: String;
  public schoolYear: String;
  public title: String;
  public subtitle: String;
  public categorie: String;
  public content: String;
  public publisher: String;
  public date: String;
  public time: String;
  public feedImage: String;
  public link: String;

  constructor(
    id,
    classe,
    school,
    department,
    schoolYear,
    title,
    subtitle,
    categorie,
    content,
    publisher,
    date,
    time,
    feedImage,
    link
  ) {
    this.id = id;
    this.classe = classe;
    this.school = school;
    this.department = department;
    this.schoolYear = schoolYear;
    this.title = title;
    this.subtitle = subtitle;
    this.categorie = categorie;
    this.content = content;
    this.publisher = publisher;
    this.date = date;
    this.time = time;
    this.feedImage = feedImage;
    this.link = link;
  }

  checkEmptiness() {
    if (this.school === ('' || null || undefined)) {
      this.school = '';
    }
    if (this.title === ('' || null || undefined)) {
      this.title = '';
    }
    if (this.content === ('' || null || undefined)) {
      this.content = '';
    }
    if (this.subtitle === ('' || null || undefined)) {
      this.subtitle = '';
    }
    if (this.publisher === ('' || null || undefined)) {
      this.publisher = '';
    }
    if (this.date === ('' || null || undefined)) {
      this.date = '--/--/----';
    }
    if (this.time === ('' || null || undefined)) {
      this.time = '--:--';
    }
    if (this.link === ('' || null || undefined)) {
      this.link = '';
    }
  }
}
