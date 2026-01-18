import { ChatService } from "./src/chatService/chatService";
import { ReactionDecorator } from "./src/decorator/reactionDecorator";

const chatInstance = ChatService.getInstance()

let harshit = chatInstance.createUser("Harshit")
let rahul = chatInstance.createUser("Rahul")
let ayush = chatInstance.createUser("ayush")
let aditya = chatInstance.createUser("aditya")

// let harshit_rahul_1_1chat = chatInstance.createOneToOneChat(harshit.getId(), rahul.getId())

// chatInstance.sendMessage(harshit.getId(), harshit_rahul_1_1chat.getId(), "Hello Good Morning")

// chatInstance.sendMessage(rahul.getId(), harshit_rahul_1_1chat.getId(), "hey i'm good how about you ????")


// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();

// chatInstance.getChatHistory(harshit_rahul_1_1chat.getId())


const college_group = chatInstance.createGroupChat("college_group", [harshit, rahul, ayush, aditya])

let message1 = chatInstance.sendMessage(aditya.getId(), college_group.getId(), "hey everyone, Fridat Mood")


// yes yes yes 🙌:2, 👍:1

const reactionDecorator = new ReactionDecorator(message1)

reactionDecorator.addReaction(harshit.getId(), "❤️")
reactionDecorator.addReaction(rahul.getId(), "❤️")
reactionDecorator.addReaction(harshit.getId(), "✌️")
reactionDecorator.addReaction(rahul.getId(), "✌️")
reactionDecorator.addReaction(aditya.getId(), "✌️")

console.log(reactionDecorator.getContent()); // hey everyone, Fridat Mood ❤️ : 2,✌️ : 3

console.log(message1.getContent());

console.log(reactionDecorator);

// ReactionDecorator {

//   baseObject: Message {
//     id: '8ad9e9f8-b1b5-4e92-bc8d-7e20f74ca1b5',
//     sender: User { id: '86a67c09-4f91-40e6-bb67-68d7981fc41b', name: 'aditya' },
//     chat: GroupChat {
//       id: '193ad470-e75c-4c76-ad32-074415300e05',
//       members: [Array],
//       message: [Array],
//       groupName: 'college_group'
//     },
//     content: 'hey everyone, Fridat Mood',
//     timeStamp: 2026-01-18T08:17:14.871Z
//   },


//   reaction: [
//     { emoji: '❤️', userId: 'b2ab4281-6e17-4a2c-a620-025f098d5c2c' },
//     { emoji: '❤️', userId: '8b107231-702c-43a2-af51-cf0fb6f046e4' },
//     { emoji: '✌️', userId: 'b2ab4281-6e17-4a2c-a620-025f098d5c2c' },
//     { emoji: '✌️', userId: '8b107231-702c-43a2-af51-cf0fb6f046e4' },
//     { emoji: '✌️', userId: '86a67c09-4f91-40e6-bb67-68d7981fc41b' }
//   ]


// }