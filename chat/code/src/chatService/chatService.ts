import { error } from "console";
import { Chat, GroupChat, OnetoOneChat } from "../chat/chat";
import { User } from "../user/user";
import { generateKey } from "../utils"
import { send } from "process";
import { Message } from "../message/message";

export class ChatService {
    private users: Map<string, User> = new Map()
    private chats: Map<string, Chat> = new Map()

    static instance: ChatService = new ChatService()

    private constructor(){}

    static getInstance(): ChatService{
        return this.instance
    }

    createUser(name: string): User{
        const user = new User(generateKey(), name)
        this.users.set(user.getId(), user)

        return user
    }

    createOneToOneChat(userId1: string, userId2: string): Chat{
        const user1 = this.users.get(userId1)
        if(!user1){
            throw error("user1 ID is not valid")
        }

        const user2 = this.users.get(userId2)
        if(!user2){
            throw error("user2 ID is not valid")
        }

        const chat = new OnetoOneChat(user1, user2)

        this.chats.set(chat.getId(), chat)

        return chat
    }

    createGroupChat(groupName: string, users: User[]): Chat{
        const chat = new GroupChat(groupName, users)
        this.chats.set(chat.getId(), chat)

        return chat
    }

    sendMessage(senderId: string, chatId: string, content: string): Message {

        const sender = this.users.get(senderId)
        const chat = this.chats.get(chatId)

        if(!sender || !chat){
            throw error("can't send message")
        }

        const message = new Message(generateKey(), sender, chat, content)
        chat.addMessages(message) // imppppppppppppp

        // next step........... sending
        const membersFromChat = chat.getMembers()

        for(let member of membersFromChat){
            if(sender.getId() != member.getId()){
                member.onMessageReceive(message,chat)
            }
        }

        return message
    }

    getChatHistory(chatId: string): void {

        const chat = this.chats.get(chatId)
        console.log(chat.getMessages());
    }
}   