export class Document {
  public title: String;
  public subtitle: String;
  public categorie: String;
  public content: String;
  public publisher: String;
  public date: String;
  public time: String;
  public documentImage: String;
  public link: String;
  constructor(
    title,
    subtitle,
    categorie,
    content,
    publisher,
    date,
    time,
    documentImage,
    link
  ) {
    this.title = title;
    this.subtitle = subtitle;
    this.categorie = categorie;
    this.content = content;
    this.publisher = publisher;
    this.date = date;
    this.time = time;
    this.documentImage = documentImage;
    this.link = link;
  }

  checkEmptiness() {
    if (this.date === ('' || null || undefined)) {
      this.date = '--/--/----';
    }
    if (this.time === ('' || null || undefined)) {
      this.time = '--:--';
    }
  }
}
