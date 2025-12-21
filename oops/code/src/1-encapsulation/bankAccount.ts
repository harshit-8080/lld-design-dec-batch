export class BankAccount {
    private balance: number
    private accountNumber: string
    public accountOwner: string

    constructor(accountNumber:string,accountOwner:string,balance:number){
       this.accountNumber = accountNumber
       this.accountOwner = accountOwner
       this.balance = balance
    }

    public getBalance():number{
        return this.balance
    }

    public getAccountNumber():string{
        return this.accountNumber
    }

}

