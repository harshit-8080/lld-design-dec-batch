// receiver
export class BankAcccount {
    constructor(private accountNumber:string, private balance:number = 0){  
    }

    withdraw(amount:number):boolean{
        if(amount > this.balance){
            console.log("funds are not enough");
            return false
        }

        this.balance -= amount
        return true
    }

    deposit(amount:number): boolean{
        this.balance += amount
        return true
    }

    getBalance():number{
        return this.balance
    }

    refund(amount:number){
        this.balance += amount
    }
}


// Command Interface
export interface ICommand {
    execute(): boolean
    undo(): boolean
}

// Concreate commands
export class WithdrawCommand implements ICommand{

    constructor(private account: BankAcccount, private amount: number){}

    execute(): boolean {
        const status = this.account.withdraw(this.amount)
        if(status){
            console.log("withdraw has been completed");
            return true
        }
        console.log("withdraw was having some issue");
        return false
    }
    undo(): boolean {
        this.account.refund(this.amount)
        return true
    }
}

// Concreate commands
export class DepositCommand implements ICommand{
    constructor(private account: BankAcccount, private amount: number){}

    execute(): boolean {
        const status = this.account.deposit(this.amount)
        if(status){
            console.log("deposit has been completed");
            return true
        }
        console.log("deposit was having some issue");
        return false  
    }
    undo(): boolean {
        throw new Error("Method not implemented.");
    }
}

// invoker
export class ATM {

    public transactionList: ICommand[] = [];

    constructor(private atmId: number, private location: string ){}

    executeCommand(command: ICommand){
        const status = command.execute() 
        if(status){
            console.log("done");
            this.transactionList.push(command)
        }
        else {
            this.undoCommand(command)
        }
    }

    undoCommand(command: ICommand){
        command.undo()
    }
}




