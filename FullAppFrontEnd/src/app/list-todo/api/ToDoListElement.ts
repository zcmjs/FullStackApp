export class ToDoListElement {
  public id: number;
  public description: string;

  public done: boolean;
  public targetDate: Date;

  constructor(id: number, description: string, done: boolean, targetDate: Date) {
    this.id = id;
    this.description = description;
    this.done = done;
    this.targetDate = targetDate;
  }
}
