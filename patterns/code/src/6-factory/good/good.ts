// interface INotofication {
//     send(message: string): void;
// }

// class EmailNotification implements INotofication {
//     send(message: string): void {
//         console.log(`Sending email notification with message: ${message}`);
//     }
// }

// class SMSNotification implements INotofication {
//     send(message: string): void {
//         console.log(`Sending SMS notification with message: ${message}`);
//     }
// }

// class SlackNotification implements INotofication {
//     send(message: string): void {
//         console.log(`Sending Slack notification with message: ${message}`);
//     }
// }

// class TeamsNotification implements INotofication {
//     send(message: string): void {
//         console.log(`Sending Teams notification with message: ${message}`);
//     }
// }

// class DiscordNotification implements INotofication {
//     send(message: string): void {
//         console.log(`Sending Discord notification with message: ${message}`);
//     }
// }

// class NotificationFactory {
//     static createNotification(type: string): INotofication {
//         let notification: INotofication;
//         switch(type) {
//             case 'email':
//                 notification = new EmailNotification();
//                 break;
//             case 'sms':
//                 notification = new SMSNotification();
//                 break;
//             case 'slack':
//                 notification = new SlackNotification();
//                 break;
//             case 'teams':
//                 notification = new TeamsNotification();
//                 break;
//             case 'discord':
//                 notification = new DiscordNotification();
//                 break;
//             default:
//                 throw new Error('Unsupported notification type');
//         }   
//         return notification;
//     }
// }



// // client.........
// class UserService {
//     constructor(type:string){
//         NotificationFactory.createNotification(type).send('Hello User!');
//     }
// }
