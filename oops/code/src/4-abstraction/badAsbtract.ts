class CreditCard{
    pay(amount:number){
        console.log("CREDIT CARD payment DONE for amount", amount)
    }
}

class DebitCard{
    pay(amount:number){
        console.log("DEBIT CARD payment DONE for amount", amount)
    }
}

class UPI{
    pay(amount:number){
        console.log("UPI payment DONE for amount", amount)
    }
}

export function processPayment(type:string,amount:number){
    if(type==  "UPI"){
        new UPI().pay(amount)
    }
    else if(type==  "DEBIT"){
        new DebitCard().pay(amount)
    }else{
        new CreditCard().pay(amount)
    }
}


