import { BankAccount } from "./account"
import { Card } from "./card"

export class Bank{
    static instance: Bank = new Bank()

    private accounts: Map<string, BankAccount> = new Map()

    private constructor(){

    }

    static getInstance(){
        return this.instance
    }


    addAccount(accountId: string, account: BankAccount): void {
        this.accounts.set(accountId, account)
    }

    getBankAccountByNumber(accountNumber: string){
        return this.accounts.get(accountNumber)
    }

    validateCard(card: Card):boolean{
        const accountNumber = card.getAccountNumber()
        const account = this.getBankAccountByNumber(accountNumber)

        if(!account){
            return false
        }
        return true
    }
}