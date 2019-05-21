export class Class {
  private id: String;
  private name: String;
  private DepartmentName: String;

  constructor(id, name, DepartmentName) {
    this.id = id;
    this.name = name;
    this.DepartmentName = DepartmentName;
  }
  public getId(): String {
    return this.id;
  }
  public getName(): String {
    return this.name;
  }
  public getDepartmentName(): String {
    return this.DepartmentName;
  }
  public setId(value: String): void {
    this.id = value;
  }
  public setName(value: String): void {
    this.name = value;
  }
  public setDepartmentName(value: String): void {
    this.DepartmentName = value;
  }
}
