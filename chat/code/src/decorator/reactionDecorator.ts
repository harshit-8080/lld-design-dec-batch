export interface IDecorator {
    getContent(): string
}

abstract class baseDecorator implements IDecorator {
    constructor(protected baseObject: IDecorator) {}
    abstract getContent(): string;
    
}

type Reaction = {
    emoji: string, 
    userId: string
}

export class ReactionDecorator extends baseDecorator {
    private reaction: Reaction[] = []

    constructor(baseObject: IDecorator){
        super(baseObject)
    }

    addReaction(userId: string, emoji: string){

        const alreadyExit = this.reaction.some((r)=> r.emoji == emoji && r.userId == userId)

        if(!alreadyExit){
            this.reaction.push({emoji, userId})
        }
    }

    getReactionSummary(){
        const summary: Record<string, string[]> = {}

        for(let r of this.reaction){
            if(!summary[r.emoji]){
                summary[r.emoji] = []
            }

            summary[r.emoji].push(r.userId)
        }

        // console.log(summary);

        const data = Object.entries(summary).map((reaction)=>{
            return `${reaction[0]} : ${reaction[1].length}`
        })

        return data
    }

    getContent(): string {
        return this.baseObject.getContent() + " " + this.getReactionSummary()
    }
}


