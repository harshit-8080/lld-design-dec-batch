import { PaymentStatus } from "../enum";
import { ShowSeat } from "../seat/showSeatStatus";
import { Show } from "../show/show";
import { User } from "../user/user";


export class Booking {
  constructor(
    public id: string,
    public user: User,
    public show: Show,
    public seats: ShowSeat[],
    public totalAmount: number,
    public paymentStrategy: any,
    public discountStrategy: any,
    public paymentStatus: PaymentStatus,
  ) {}

  confirmBooking() {
    this.seats.forEach((seat) => seat.book());
    this.paymentStatus = PaymentStatus.SUCCESS;
  }

  cancelBooking() {
    this.seats.forEach((seat) => seat.release());
  }
}