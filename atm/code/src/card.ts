export class Card{
    constructor(
        private cardNumber: string,
        private cardHolderName: string,
        private accountNumber: string,
        private block: boolean = false
    ){}

    getCardNumber(): string{
        return this.cardNumber
    }

    getCardHolderName(): string{
        return this.cardHolderName
    }

    getAccountNumber(): string{
        return this.accountNumber
    }

    isBlocked(): boolean{
        return this.block
    }

    blockCard(): void{
        this.block = true
    }

    unblockCard(): void{
        this.block = false
    }
}