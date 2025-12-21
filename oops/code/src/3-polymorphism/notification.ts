export  class Notificationn{
    sender:string
    receiver:string


    sendNotification(messages:string){
        console.log("SMS Notificationn sent", messages)
    }
}


export class EmailNotification extends Notificationn{

    sendNotification(message:string){

        console.log("EMAIL Notificationn sent",message)
    }
}


export class SlackNotification extends EmailNotification{

        sendNotification(message:string){

        console.log("SLACK Notificationn sent",message)
    }
}