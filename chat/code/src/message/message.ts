import { Chat } from "../chat/chat";
import { IDecorator } from "../decorator/reactionDecorator";
import { User } from "../user/user";

export class Message implements IDecorator{
    constructor(
        private id: string, 
        private sender: User,
        private chat: Chat,
        private content: string,
        private timeStamp: Date = new Date()
    ){}

    getId(): string {
        return this.id
    }

    getContent(): string {
        return this.content
    }

    getSender(): User{
        return this.sender
    }
}