import { PaymentStatus } from "../enum";

export interface IPayment{
    pay(amount:number): PaymentStatus
}


export class UPI implements IPayment{
    pay(amount: number): PaymentStatus {
        console.log("UPI paymment done for amouunt ", amount);
        return PaymentStatus.SUCCESS
    }
}


export class Credit implements IPayment{
    pay(amount: number): PaymentStatus {
        console.log("Credit paymment done for amouunt ", amount);
        return PaymentStatus.SUCCESS
    }
}


export class Debit implements IPayment{
    pay(amount: number): PaymentStatus {
        console.log("Debit paymment done for amouunt ", amount);
        return PaymentStatus.SUCCESS
    }
}