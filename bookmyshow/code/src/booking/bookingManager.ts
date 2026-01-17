import { Show } from "../show/show";
import { User } from "../user/user";
import { IPayment } from "../payment/payment";
import { Booking } from "./booking";
import { generateId, PaymentStatus } from "../enum";
import { IDiscount } from "../discounts/discount";

export class BookingManager {
  static instance: BookingManager;

  private constructor() {}

  static getInstance(): BookingManager {
    if (this.instance == null) {
      this.instance = new BookingManager();
    }

    return this.instance;
  }

  // addUser(){}
  // addShow(){}


  // seatLabels = ["A1", "A2" "A3"]

  // seatLabels --> ["A1", "A3", "B12"]
  bookTicket(
    user: User,
    show: Show,
    seatLabels: string[],
    paymentStratgey: IPayment,
    discountStratgey?: IDiscount,
  ): Booking {

    // get the selected Seats
   const selectedShowSeats = seatLabels.map((label) => {
      const showSeat = show.seat.get(label);
      if (!showSeat) {
        throw new Error(`Seat ${label} not found for this show`);
      }
      return showSeat;
    });


    // block the seats
    selectedShowSeats.forEach((showSeat) => showSeat.block());

    try {
      // calculate price based on seat type
      const baseAmount = selectedShowSeats.reduce((sum, showSeat) => {
        
        const seatType = showSeat.seat.seatType;

        let seatPrice = 0;
        show.layoutPrice.forEach((layout) => {
          if (layout.type == seatType) {
            seatPrice = layout.price;
          }
        });

        return (sum += seatPrice);
      }, 0);


      const amountAfterDiscount = discountStratgey
        ? discountStratgey.applyDiscount(baseAmount)
        : baseAmount;

      const newBooking = new Booking(
        generateId(),
        user,
        show,
        selectedShowSeats,
        amountAfterDiscount,
        paymentStratgey,
        discountStratgey,
        PaymentStatus.IN_PROGRESS,
      );

      const paymentStatus = paymentStratgey.pay(amountAfterDiscount);

      if (paymentStatus === PaymentStatus.SUCCESS) {
        newBooking.confirmBooking();
        console.log("Booking Confirmed");
      } else {
        console.log("Booking Failed");
        // release tickets after 3 seconds
        setTimeout(() => {
          selectedShowSeats.forEach((seat) => seat.release());
        }, 4000);
      }
      return newBooking
      
    } catch (error) {
      // release tickets after 3 seconds
      setTimeout(() => {
        selectedShowSeats.forEach((seat) => seat.release());
      }, 4000);
    }
  }

  cancelTicket(booking: Booking) {
    booking.cancelBooking();
    if (!booking.show.cancellable()) {
      console.log("Ticket has been cancelled, but sorry no refund");
      return;
    }

    booking.paymentStrategy.refund(booking.totalAmount);
  }
}
