export class Meeting {
  private description: String;
  private startTime: String;
  private id: number;
  private place: String;
  private endTime: String;
  private status: String;
  constructor(description, startTime, id, place, endTime, status) {
    this.description = description;
    this.startTime = startTime;
    this.id = id;
    this.place = place;
    this.endTime = endTime;
    this.status = status;
  }

  public getDescription(): String {
    return this.description;
  }

  public getStartTime(): String {
    return this.startTime;
  }

  public getId(): number {
    return this.id;
  }

  public getPlace(): String {
    return this.place;
  }

  public getEndTime(): String {
    return this.endTime;
  }

  public getStatus(): String {
    return this.status;
  }

  public setDescription(value: String) {
    this.description = value;
  }

  public setStartTime(value: String) {
    this.startTime = value;
  }

  public setId(value: number) {
    this.id = value;
  }

  public setPlace(value: String) {
    this.place = value;
  }

  public setEndTime(value: String) {
    this.endTime = value;
  }

  public setStatus(value: String) {
    this.status = value;
  }
}
