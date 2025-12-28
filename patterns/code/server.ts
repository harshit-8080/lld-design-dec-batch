// import { EagerSingleton } from "./src/1-singleton/eager";
// import { Singleton } from "./src/1-singleton/lazy";

import { CrediCardPaymentStrategy, PaymentProcessor, PayPalPaymentStrategy } from "./src/2-strategy/good";

// // const o1 = Singleton.getInstance()
// // const o2 = Singleton.getInstance()

// // if (o1 === o2) {
// //     console.log("Same instance")
// // } else {
// //     console.log("Different instances")
// // }


// // const o3 = EagerSingleton.getInstance()
// // const o4 = EagerSingleton.getInstance()

// // if (o3 === o4) {
// //     console.log("Same instance")
// // } else {
// //     console.log("Different instances")
// // }


// console.log(Singleton);
// console.log("-=============");

// // Singleton.getInstance()


const p1 = new PaymentProcessor()

p1.setPaymentStrategy(new CrediCardPaymentStrategy());
p1.processPayment(100);


p1.setPaymentStrategy(new PayPalPaymentStrategy());
p1.processPayment(200);