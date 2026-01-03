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


// function getNotificationObject(type: string): INotofication {
//     let notification: INotofication;

//     if (type === 'email') {
//         notification = new EmailNotification();
//     } else if (type === 'sms') {
//         notification = new SMSNotification();
//     } else if (type === 'slack') {
//         notification = new SlackNotification();
//     } else if (type === 'teams') {
//         notification = new TeamsNotification();
//     } else {
//         throw new Error('Unsupported notification type');
//     }

//     return notification;
// }


// class UserService {
//     constructor(type:string){
//         getNotificationObject(type).send('Hello User!');
//     }
// }
