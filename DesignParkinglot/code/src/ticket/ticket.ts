import { TicketStatus } from "../enum";

export class Ticket{
    constructor(

        private ticketId: string,
        private vehicleNumber: string,
        private spotId: string,
        private entryTime: Date = new Date(),
        private exitTime: Date = null,
        private amount: number = null,
        private ticketStatus: TicketStatus = TicketStatus.ACTIVE,
    ){}


    getTicketStatus(): TicketStatus{
        return this.ticketStatus
    }
    
    getTicketId(): string{
        return this.ticketId
    }

    getVehicleNumer(): string{
        return this.vehicleNumber
    }

    getSpotId(): string{
        return this.spotId
    }

    setExitTime(exitTime: Date){
        this.exitTime = exitTime
    }

    setAmount(amount: number){
        this.amount = amount
    }

    updateStatus(status: TicketStatus){
        this.ticketStatus = status
    }

    getDurationInSeconds(){
        const milliSeconds = this.exitTime.getTime() - this.entryTime.getTime()
        return milliSeconds / 1000
    }

}