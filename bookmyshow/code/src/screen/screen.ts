import { generateId, SeatLayout, SeatType } from "../enum";
import { Seat } from "../seat/seat";
import { Show } from "../show/show";
import { Threater } from "../threater/threater";

export class Screen {
  constructor(
    public id: string,
    public name: string,
    public threater: Threater,
    public show: Show[] = [],
    public seat: Seat[] = [],
  ) {
    this.threater.addScreen(this);
  }

  // [
  //   {SeatType.PLATINUM, count:20},
  // {SeatType.GOLD, count:20},
  // {SeatType.SILVER, count:20},

  // ]

  addShow(newShow: Show) {
    this.show.push(newShow);
  }

  configureSeats(seatLayout: SeatLayout[]) {
    const rowCharCode = "A".charCodeAt(0);
    let index = 0;

    for (let layout of seatLayout) {
      for (let i = 1; i <= layout.count; i++) {
        const row = String.fromCharCode(rowCharCode + Math.floor(index / 10));

        const numberInRow = (index % 10) + 1;
        const label = row + numberInRow;

        const newSeat = new Seat(generateId(), label, layout.type);
        index++;

        this.seat.push(newSeat);
      }
    }
  }
}
