import { Chat } from "../chat/chat";
import { Message } from "../message/message";

export class User {
    constructor(
        private id: string, 
        private name: string,
        private isOnline: boolean = true
    ){}

    getId(): string {
        return this.id
    }

    getName(): string {
        return this.name
    }

    goOffline(){
        this.isOnline = false
    }

    goOnline() {

        this.isOnline = true
        // bring all the message from queue and display.........
        
    }

    onMessageReceive(messgae: Message, chat: Chat){
        if(this.isOnline){
            console.log(` Notification for - ${this.getName()}
                :: in Chat - ${chat.getChatName(this)}
                :: message - ${messgae.getContent()}
            `);
        }else {
            // keep message somewhere and bring when usr is onlinbe..........
        }

    }
}