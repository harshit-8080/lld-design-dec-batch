export interface IObserver {
    update(data: any): void
}

export class EmailService implements IObserver {
    update(data: any): void {
        console.log(`EmailService: Sending email with data: ${data}`)
    }
}

export class SmsService implements IObserver {
    update(data: any): void {
        console.log(`SmsService: Sending SMS with data: ${data}`)
    }
}

export interface IObservable{
    attach(observer: IObserver[]): void
    detach(observer: IObserver): void
    notify(data: any): void
}

class EventManager implements IObservable{

    private observers: IObserver[] = []

    attach(observer: IObserver[]): void {
        this.observers.push(...observer)
    }

    detach(observer: IObserver): void {
        this.observers = this.observers.filter(obs => obs !== observer)
    }

    notify(data: any): void {
        this.observers.forEach(observer => observer.update(data))
    }
}


export class BankAccount  {

    private balance: number = 0
    private eventManager: EventManager = new EventManager();

    constructor(observers: IObserver[] = []) {
        this.eventManager.attach(observers)
    }

    withdraw(amount: number): void {
        console.log(`Withdrawing ${amount} from bank account.`)
        this.balance -= amount
        this.eventManager.notify(`Withdrawal of ${amount} completed.`)   
    }

    credit(amount: number): void {
        console.log(`Crediting ${amount} to bank account.`)
        this.balance += amount
        this.eventManager.notify(`Credit of ${amount} completed.`)   
    }

}