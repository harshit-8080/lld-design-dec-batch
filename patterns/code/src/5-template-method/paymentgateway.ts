abstract class PaymentGateway {

    public processPayment(amount: number): void {
        this.validatePaymentDetails();
        this.authenticateUser();
        this.executePayment(amount);
        this.sendReceipt();

    }

    validatePaymentDetails(): void {
        console.log("Validating payment details...");
    }

    abstract authenticateUser(): void;
    abstract executePayment(amount: number): void;

    sendReceipt(): void {
        console.log("Sending receipt to user...");
    }
}


class StripePaymentGateway extends PaymentGateway {
    authenticateUser(): void {
        console.log("Authenticating user with Stripe...");
    }
    executePayment(amount: number): void {
        console.log(`Processing payment of $${amount} through Stripe.`);
    }
}

class PayPalPaymentGateway extends PaymentGateway {
    authenticateUser(): void {
        console.log("Authenticating user with PayPal...");
    }
    executePayment(amount: number): void {
        console.log(`Processing payment of $${amount} through PayPal.`);
    }
}


const stripe_obj = new StripePaymentGateway
stripe_obj.processPayment(100);

