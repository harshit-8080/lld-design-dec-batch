interface IPaymentMethod {
    pay(amount: number): void;
}

class CreditCardPayment implements IPaymentMethod {
    pay(amount: number): void {
        console.log("credit card payment");
    }
}

class DebitCardPayment implements IPaymentMethod {
    pay(amount: number): void {
        console.log("debit card payment");
    }
}

class PayPalPayment implements IPaymentMethod {
    pay(amount: number): void {
        console.log("paypal payment");
    }
}


class UPIIPayment implements IPaymentMethod {
    pay(amount: number): void {
        console.log("UPI payment");
    }
}


class PaymentProcessor {
    // constructor(private paymentMethod: IPaymentMethod) {}

    private paymentMethod: IPaymentMethod;
    constructor(paymentMethod: IPaymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    pay(amount: number): void {
        this.paymentMethod.pay(amount); //
    }
}


const obj_PaymentProcessor = new PaymentProcessor(new UPIIPayment());
obj_PaymentProcessor.pay(100); // run