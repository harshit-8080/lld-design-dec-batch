import { Message } from "../message/message"
import { User } from "../user/user"
import { generateKey } from "../utils"

export abstract class Chat {
    protected id: string
    protected members: User[]
    protected message: Message[]

    constructor() {
        this.id = generateKey()
        this.members = []
        this.message = []
    }

    getId(): string {
        return this.id
    }

    getMembers(): User[] {
        return this.members
    }

    getMessages(): Message[] {
        return this.message
    }

    addMessages(newMessage): void {
        this.message.push(newMessage)
    }

    abstract getChatName(user: User): string

}

export class OnetoOneChat extends Chat {
    constructor(user1: User, user2: User){
        super()

        this.members.push(user1, user2)
    }

    getChatName(currentUser: User): string {
        const otherUser = this.members.find((member)=> member.getId() != currentUser.getId())

        return otherUser.getName() + " chat.."
    }
}

export class GroupChat extends Chat {
    constructor(private groupName:string, initialUsers: User[]){
        super()
        this.members.push(...initialUsers)
    }

    getChatName(): string {
        return this.groupName
    }

    addMembers(newMember: User){
        this.members.push(newMember)
    }

    removeMembers(user: User){
        this.members = this.members.filter((member)=> member.getId() != user.getId())
    }
}


