import { City } from "../city/city";
import { Screen } from "../screen/screen";

export class Threater {
  constructor(
    public id: string,
    public name: string,
    public city: City,
    public screen: Screen[] = []
  ) {}

  addScreen(newScreen: Screen) {
    this.screen.push(newScreen);
  }

  getAllScreen(): Screen[] {
    return this.screen;
  }
}
