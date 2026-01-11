import { error } from "console";
import { ParkingLot } from "../parkingLot/parkinglot";
import { Ticket } from "../ticket/ticket";
import { IVehicle } from "../vehicle/vehicle";
import { SpotSize, SpotStatus, VehicleType } from "../enum";
import { ParkingSpot } from "../parking-spot/parking-spot";
import { generateRandomId } from "../utils";

export class EntranceGate {
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

    processVehicleEntry(vehicle: IVehicle): Ticket{

        // check if gate is ioperational
        if(!this.isGateOperational()){
            throw error("gate is not operational")
        }

        // get requred spot size
        const spot: ParkingSpot =  this.parkingLot.getRequiredSpotSizeByVehicleType(vehicle.getRequiredSpotSize())
        spot.assignVehicleToSpot(vehicle)

        spot.setSpotStatus(SpotStatus.OCCUPIED)

        // create a ticket and return ticket
        const newTicket = new Ticket(
            generateRandomId(), 
            vehicle.getVehicleNumber(), 
            spot.getSpotId()
        )

        return newTicket
    }
}