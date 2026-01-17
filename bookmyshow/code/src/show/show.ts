import { LayoutPrice, SeatStatus } from "../enum";
import { Screen } from "../screen/screen";
import { ShowSeat } from "../seat/showSeatStatus";
import { Threater } from "../threater/threater";

export class Show {
  constructor(
    public id: string,
    public name: string,
    public screen: Screen,
    public startTime: Date,
    public layoutPrice: LayoutPrice[],
    public threater: Threater,
    public isCancellable: boolean = true,
    public seat: Map<string, ShowSeat> = new Map(),
  ) {
    this.screen.addShow(this);

    this.screen.seat.forEach((seat) => {
      const seatStatusPerShow = new ShowSeat(
        this.id,
        seat,
        SeatStatus.AVAILABLE,
      );
      this.seat.set(seat.seatLable, seatStatusPerShow);
    });
  }

  getId(): string {
    return this.id;
  }

  getSeatStatus() {
    console.log(this.seat);
  }

  public cancellable(): boolean {
    return this.isCancellable;
  }
}
