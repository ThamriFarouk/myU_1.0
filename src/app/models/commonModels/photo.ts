export class Photo {
  public path: String;
  public caption: String;
  public description: String;
  public date: String;
  public time: String;
  constructor(path, caption, description, date, time) {
    this.path = path;
    this.caption = caption;
    this.description = description;
    this.date = date;
    this.time = time;
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
