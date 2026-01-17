import { Threater } from "../threater/threater";

export class City {
  constructor(
    private id: string,
    private name: string,
    public threater: Threater[] = []
  ) {}

  getId(): string {
    return this.id;
  }

  getCity(): string {
    return this.name;
  }

  addThreater(newThreater: Threater): void {
    this.threater.push(newThreater);
  }
}
