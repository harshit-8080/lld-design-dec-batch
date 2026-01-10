// // // // // import { EagerSingleton } from "./src/1-singleton/eager";
// // // // // import { Singleton } from "./src/1-singleton/lazy";

import { ATM, BankAcccount, DepositCommand, WithdrawCommand } from "./src/9-command/atm";

// import { callbackify } from "util";
// import { APIService, CacheProxy } from "./src/8-proxy/proxy";

// // import { ResumeTemplate } from "./src/7-prototype/resume";

// // // import { BankAccount, EmailService, SmsService } from "./src/4-observer/bank";

// // // // import { CrediCardPaymentStrategy, PaymentProcessor, PayPalPaymentStrategy } from "./src/2-strategy/good";

// // // // // // const o1 = Singleton.getInstance()
// // // // // // const o2 = Singleton.getInstance()

// // // // // // if (o1 === o2) {
// // // // // //     console.log("Same instance")
// // // // // // } else {
// // // // // //     console.log("Different instances")
// // // // // // }


// // // // // // const o3 = EagerSingleton.getInstance()
// // // // // // const o4 = EagerSingleton.getInstance()

// // // // // // if (o3 === o4) {
// // // // // //     console.log("Same instance")
// // // // // // } else {
// // // // // //     console.log("Different instances")
// // // // // // }


// // // // // console.log(Singleton);
// // // // // console.log("-=============");

// // // // // // Singleton.getInstance()


// // // // const p1 = new PaymentProcessor()

// // // // p1.setPaymentStrategy(new CrediCardPaymentStrategy());
// // // // p1.processPayment(100);


// // // // p1.setPaymentStrategy(new PayPalPaymentStrategy());
// // // // p1.processPayment(200);


// // // const email_observer = new EmailService()
// // // const sms_observer = new SmsService()


// // // const harshit_bnk = new BankAccount([email_observer,sms_observer])


// // // harshit_bnk.credit(500)
// // // harshit_bnk.withdraw(200)


// // // console.log("================");

// // // const rutik_bnk = new BankAccount([sms_observer])

// // // rutik_bnk.credit(1000)
// // // rutik_bnk.withdraw(300)


// // const dev_template: ResumeTemplate = new ResumeTemplate(
// //   "Developer Template",
// //   ["DSA"],
// //   [],
// //   []
// // );


// // const harshit_resume: ResumeTemplate = dev_template.clone()
// // // harshit_resume.addSkill("GO")

// // console.log(harshit_resume); // DSA GO

// // if(harshit_resume instanceof ResumeTemplate){
// //     console.log("yesssss");
// // }else{
// //     console.log("noooo");
// // }


// // const rahul_resume: ResumeTemplate = dev_template.clone()

// // // rahul_resume.addSkill("PYthon") // DSA Python




// // console.log(rahul_resume);

// // if(harshit_resume == rahul_resume) {
// //     console.log("truueee");
// // }else {
// //     console.log("falseee");
// // }



// // client code

// const cache_object = new CacheProxy(new APIService())

// console.log(cache_object.getUserData("harshit"));


// console.log("----------------");


// console.log(cache_object.getUserData("harshit"));


// client code

const harshit_bnk = new BankAcccount("987654321", 500)

const hitech_sbi_stm = new ATM(123456, "Hyd")

hitech_sbi_stm.executeCommand(new WithdrawCommand(harshit_bnk, 100)) // 1st 400
hitech_sbi_stm.executeCommand(new WithdrawCommand(harshit_bnk, 100)) // 2nd 300
hitech_sbi_stm.executeCommand(new DepositCommand(harshit_bnk, 1000)) // 3rd 1300
hitech_sbi_stm.executeCommand(new WithdrawCommand(harshit_bnk, 300)) // 4th 1000
// 1000

let currentBalance = harshit_bnk.getBalance()
console.log(currentBalance); // 1000

hitech_sbi_stm.undoCommand(hitech_sbi_stm.transactionList.pop()) // 4th poped out 1000 so balance is 1300


currentBalance = harshit_bnk.getBalance()
console.log(currentBalance); // 1300