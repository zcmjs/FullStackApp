export class DashBoardDto {
  id: number;
  description: string;

  constructor(data) {
    this.id = data.id;
    this.description = data.description;

  }
}
