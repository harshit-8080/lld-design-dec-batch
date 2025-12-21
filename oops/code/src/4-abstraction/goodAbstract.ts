interface PaymentMode {
    // validateUserBankDetails():boolean
    pay(amount: number): void
}

export class CreditCard implements PaymentMode {
    pay(amount: number): void {
        console.log("CREDIT CARD payment DONE for amount", amount)
    }
}

export class DebitCard implements PaymentMode {
    pay(amount: number): void {
        console.log("DEBIT CARD payment DONE for amount", amount)
    }
}

export class UPI implements PaymentMode {
    pay(amount: number): void {
        console.log("UPI CARD payment DONE for amount", amount)
    }
}

export class Wallet implements PaymentMode {
    pay(amount: number): void {
        console.log("Wallet payment DONE for amount", amount)
    }
}

// TYPE PaymentMode --> new UPI() || new DEbotcard() || new CREDIDTCART()
export function processPayment(gateway: PaymentMode, amount: number) {
    gateway.pay(amount) // POLY
}


