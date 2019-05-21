export class Document {
  public title: String;
  public subtitle: String;
  public categorie: String;
  public content: String;
  public publisher: String;
  public date: String;
  public time: String;
  public documentImage: String;
  constructor(
    title,
    subtitle,
    categorie,
    content,
    publisher,
    date,
    time,
    documentImage
  ) {
    this.title = title;
    this.subtitle = subtitle;
    this.categorie = categorie;
    this.content = content;
    this.publisher = publisher;
    this.date = date;
    this.time = time;
    this.documentImage = documentImage;
  }
}
