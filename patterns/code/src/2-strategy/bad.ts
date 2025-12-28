// import c from "config";

// class CrediCardPayment {
//   pay(amount: number): void {
//     console.log(`Processing credit card payment of $${amount}`);
//     // Logic for processing credit card payment
//   }
// }

// class DebitCardPayment {
//   pay(amount: number): void {
//     console.log(`Processing debit card payment of $${amount}`);
//     // Logic for processing debit card payment
//   }
// }

// class PayPalPayment {
//   pay(amount: number): void {
//     console.log(`Processing PayPal payment of $${amount}`);
//     // Logic for processing PayPal payment
//   }
// }



// // client
// class PaymentProcessor {
//   processPayment(method: string, amount: number): void {
//     if (method === "credit_card") {
//       const payment = new CrediCardPayment();
//       payment.pay(amount);
//     } else if (method === "debit_card") {
//       const payment = new DebitCardPayment();
//       payment.pay(amount);
//     } else if (method === "paypal") {
//       const payment = new PayPalPayment();
//       payment.pay(amount);
//     } else {
//       throw new Error("Unsupported payment method");
//     }
//   }
// }