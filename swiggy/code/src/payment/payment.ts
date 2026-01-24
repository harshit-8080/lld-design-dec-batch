import { PaymentStatus } from "../enum";

export interface IPayment {
    pay(amount: number): PaymentStatus
    refund(amount: number): PaymentStatus
}

export class UPI implements IPayment{
    pay(amount: number): PaymentStatus {
        console.log("UPI Payment done for amount ", amount);
        return PaymentStatus.SUCCESS
    }
    refund(amount: number): PaymentStatus {
        console.log("UPI Refund done for amount ", amount);
        return PaymentStatus.SUCCESS
    } 
}


export class CreditCard implements IPayment{
    pay(amount: number): PaymentStatus {
        console.log("Credit Card Payment done for amount ", amount);
        return PaymentStatus.SUCCESS
    }
    refund(amount: number): PaymentStatus {
        console.log("Credit Card Refund done for amount ", amount);
        return PaymentStatus.SUCCESS
    } 
}

