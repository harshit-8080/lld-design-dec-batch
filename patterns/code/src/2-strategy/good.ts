export interface IPayemntStrategy {
  pay(amount: number): void;
}

export class CrediCardPaymentStrategy implements IPayemntStrategy {
  pay(amount: number): void {
    console.log(`Processing credit card payment of $${amount}`);
  }
}

export class DebitCardPaymentStrategy implements IPayemntStrategy {
  pay(amount: number): void {
    console.log(`Processing debit card payment of $${amount}`);
  }
}

export class PayPalPaymentStrategy implements IPayemntStrategy {
  pay(amount: number): void {
    console.log(`Processing PayPal payment of $${amount}`);
  }
}

export class UPIPaymentStrategy implements IPayemntStrategy {
  pay(amount: number): void {
    console.log(`Processing UPI payment of $${amount}`);
  }
}


export class PaymentProcessor {
    private paymentStrategy: IPayemntStrategy;

    setPaymentStrategy(strategy: IPayemntStrategy) {
        this.paymentStrategy = strategy;
    }

    processPayment(amount: number): void {
        this.paymentStrategy.pay(amount);
    }
}

