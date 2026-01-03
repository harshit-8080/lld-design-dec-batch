import { SmsService } from "../../4-observer/bank";

interface INotofication {
    send(message: string): void;
}

class EmailNotification implements INotofication {
    send(message: string): void {
        console.log(`Sending email notification with message: ${message}`);
    }
}

class SMSNotification implements INotofication {
    send(message: string): void {
        console.log(`Sending SMS notification with message: ${message}`);
    }
}

class SlackNotification implements INotofication {
    send(message: string): void {
        console.log(`Sending Slack notification with message: ${message}`);
    }
}

class TeamsNotification implements INotofication {
    send(message: string): void {
        console.log(`Sending Teams notification with message: ${message}`);
    }
}

class DiscordNotification implements INotofication {
    send(message: string): void {
        console.log(`Sending Discord notification with message: ${message}`);
    }
}

class ABCCCCCCNotification implements INotofication {
    send(message: string): void {
        console.log(`Sending Diss s ABCCCCCC notification with message: ${message}`);
    }
}

class NotificationFactory {
     static notiyMap: Map<string, new () => INotofication> = new Map();

    static notificationRegister(type: string, notificationService: new () => INotofication): void {
        this.notiyMap.set(type, notificationService)
    }


    static createNotification(type: string): INotofication {
        const notificationService = this.notiyMap.get(type); // if-else or switch case
        return new notificationService();    
    }

}


NotificationFactory.notificationRegister('email', EmailNotification);
NotificationFactory.notificationRegister('sms', SMSNotification);
NotificationFactory.notificationRegister('slack', SlackNotification);
NotificationFactory.notificationRegister('teams', TeamsNotification);
NotificationFactory.notificationRegister('discord', DiscordNotification);
NotificationFactory.notificationRegister('abcccccc', ABCCCCCCNotification);


// client.........
class UserService {
    constructor(type:string){
        NotificationFactory.createNotification(type).send('Hello User!');
    }
}


// public class Suv implements Car {
//     @Override
//     public void drive() {
//         System.out.println("Driving SUV");
//     }
// }

// public class Hatchback implements Car {
//     @Override
//     public void drive() {
//         System.out.println("Driving Hatchback");
//     }
// }


// import java.util.HashMap;
// import java.util.Map;
// import java.util.function.Supplier;

// public class CarFactory {

//     private static final Map<String, Supplier<Car>> carMap = new HashMap<>();

//     static {
//         carMap.put("SEDAN", Sedan::new);
//         carMap.put("SUV", Suv::new);
//         carMap.put("HATCHBACK", Hatchback::new);
//     }

//     public static Car getCar(String type) {
//         Supplier<Car> carSupplier = carMap.get(type.toUpperCase());
//         if (carSupplier == null) {
//             throw new IllegalArgumentException("Invalid car type");
//         }
//         return carSupplier.get();
//     }
// }