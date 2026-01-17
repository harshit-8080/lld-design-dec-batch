import { SeatStatus, SeatType } from "../enum";

export class Seat {
    constructor(
        public id: string,
        public seatLable: string, // "A1", "A2"
        public seatType: SeatType,
    ){}
}