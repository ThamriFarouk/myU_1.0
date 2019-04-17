export class Person {
  private fullName: String;
  private id: number;

  constructor(fullName, id) {
    this.fullName = fullName;
    this.id = id;
  }

  public getFullName(): String {
    return this.fullName;
  }

  public getId(): number {
    return this.id;
  }

  public setFullName(value: String) {
    this.fullName = value;
  }

  public setId(value: number) {
    this.id = value;
  }
}
