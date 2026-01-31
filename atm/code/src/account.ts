export class BankAccount {
    constructor(
        private accountNumber: string,
        private accountHolder: string,
        private balance: number = 0,
        private pin: string
    ){}

    getAccountNumber(): string {
        return this.accountNumber;
    }

    getAccountHolder(): string {
        return this.accountHolder;
    }

    getPin(): string {
        return this.pin;
    }

    getBalance(): number {
        return this.balance;
    }

    withdraw(amount: number): boolean {
        if(amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            return true;
        }
        return false;
    }

    deposit(amount: number): boolean {
        this.balance += amount;
        return true;
    }
}