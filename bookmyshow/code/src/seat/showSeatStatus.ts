import { SeatStatus } from "../enum";
import { Seat } from "./seat";

export class ShowSeat {
  constructor(
    public showId: string,
    public seat: Seat,
    public status: SeatStatus
  ) {}

  block() {
    if (this.status !== SeatStatus.AVAILABLE) {
      throw new Error("Seat not available");
    }
    this.status = SeatStatus.BLOCKED;
  }

  book() {
    if (this.status !== SeatStatus.BLOCKED) {
      throw new Error("Seat must be blocked before booking");
    }
    this.status = SeatStatus.BOOKED;
  }

  release() {
    if (this.status === SeatStatus.BLOCKED) {
      this.status = SeatStatus.AVAILABLE;
    }
  }
}
