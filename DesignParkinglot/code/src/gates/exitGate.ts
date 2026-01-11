import { error } from "console";
import { PaymentStatus, SpotStatus, TicketStatus } from "../enum";
import { ParkingLot } from "../parkingLot/parkinglot";
import { Ticket } from "../ticket/ticket";
import { IVehicle } from "../vehicle/vehicle";
import { PricingStrategyBySecond } from "../pricingStratgy/pricce";
import { IPayment } from "../payment/payment";

export class ExitGate {
    constructor(
        private gateId: string,
        private parkingLot: ParkingLot,
        private isOperational: boolean = true,
    ){}

    getGateId(){
        return this.gateId
    }

    isGateOperational(): boolean{
        return this.isOperational
    }

    processVehicleExit(ticketId: string, paymentStrategy: IPayment){

        console.log(ticketId);
        const ticket = this.parkingLot.getTicketById(ticketId)


        if(ticket.getTicketStatus() != TicketStatus.ACTIVE){
            throw error(" invalid ticket")
        }

        ticket.setExitTime(new Date())

        const spot = this.parkingLot.getSpotByTicketId(ticketId)
        const vehicle = spot.getParkedVehicle()

        const amount = PricingStrategyBySecond.calcualePrice(vehicle.getVehicleType(), ticket.getDurationInSeconds())


        const paymentStatus:PaymentStatus = paymentStrategy.pay(amount)
        if(PaymentStatus.SUCCESS != paymentStatus){
            throw error(" payment failed")
            return
        }


        spot.releaseSpot()
        spot.setSpotStatus(SpotStatus.AVAILABLE)
        ticket.updateStatus(TicketStatus.PAID)

    }
}