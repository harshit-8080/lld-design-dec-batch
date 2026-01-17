import { count } from "console";

export enum PaymentStatus {
  IN_PROGRESS = "IN_PROGRESS",
  SUCCESS = "SUCCESS",
  FAILED = "FAILED",
}

export enum SeatType {
  PLATINUM = "PLATINUM",
  GOLD = "GOLD",
  SILVER = "SILVER",
}

export enum SeatStatus {
  AVAILABLE = "AVAILABLE",
  BLOCKED = "BLOCKED",
  BOOKED = "BOOKED",
}


export type SeatLayout = { type: SeatType; count: number }

// create s1

// const p1 = [
//   {SeatType.PLATINUM, count:20},
// {SeatType.GOLD, count:20},
// {SeatType.SILVER, count:20},

// ]
// PLATINUM - seats 30
// GOLD seats 40
// SILVER = seats 60


export type LayoutPrice = { type: SeatType; price: number }
// show 1
// PLATINUM - 300
// GOLD - 200
// SILVER - 100


export function generateId(){
  return crypto.randomUUID()
}