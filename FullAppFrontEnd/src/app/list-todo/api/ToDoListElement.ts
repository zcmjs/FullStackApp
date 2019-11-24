export class ToDoListElement {
  public id: number;
  public username: string;
  public description: string;
  public done: boolean;
  public targetDate: Date;

  constructor(id: number, username: string, description: string, done: boolean = false, targetDate: Date) {
    this.id = id;
    this.description = description;
    this.done = done;
    this.targetDate = targetDate;
  }
}
