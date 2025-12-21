// import { BankAccount } from "./src/1-encapsulation/bankAccount"

import { Car } from "./src/2-inheritance/car"
import { EmailNotification, Notificationn, SlackNotification } from "./src/3-polymorphism/notification"
// import { processPayment } from "./src/4-abstraction/badAsbtract"
import { CreditCard, DebitCard, processPayment, UPI, Wallet } from "./src/4-abstraction/goodAbstract"

// const harshit_axis = new BankAccount("**** **** 1234 5677","HARSHIT RAJ",100)

// const harshit_current_balance = harshit_axis.getBalance()
// console.log(harshit_current_balance)



////////////////////////////////////////////////////////////////////////////////////////


// const creta = new Car("1502", "harshit","red", 4, 5)

////////////////////////////////////////////////////////////////////////////////////////


// const notificationn:Notificationn = new Notificationn()


// const notificationn:Notificationn = new EmailNotification()
// notificationn.sendNotification("GOOD NIGHT")


// const slackNotify = new SlackNotification()
// slackNotify.sendNotification("GOOD AFTERNOON")



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// processPayment("DEBIT",200)

// processPayment(new UPI(), 2000)
// processPayment(new CreditCard(), 1000)
// processPayment(new DebitCard(), 3000)

processPayment(new Wallet(), 2000)