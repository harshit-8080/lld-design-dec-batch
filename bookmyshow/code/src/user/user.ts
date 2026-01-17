import { Booking } from "../booking/booking";

export class User{
    constructor(
        public id: string,
        public name: string,
        public booking: Booking[] = []
    ){}

    addBooking(booking: Booking){
        this.booking.push(booking)
    }
}