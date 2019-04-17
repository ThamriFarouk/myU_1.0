export class Meeting {
  constructor(
    public description: String,
    public startTime: String,
    public id: number,
    public place: String,
    public endTime: String,
    public status: String
  ) {
    this.description = description;
    this.startTime = startTime;
    this.id = id;
    this.place = place;
    this.endTime = endTime;
    this.status = status;
  }
}
