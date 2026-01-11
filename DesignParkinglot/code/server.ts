import { SpotSize, VehicleType } from "./src/enum";
import { EntranceGate } from "./src/gates/entranceGate";
import { ExitGate } from "./src/gates/exitGate";
import { ParkingSpot } from "./src/parking-spot/parking-spot";
import { ParkingLot } from "./src/parkingLot/parkinglot";
import { UPI } from "./src/payment/payment";
import { generateRandomId } from "./src/utils";
import { Bike, Car, VehicleFactory } from "./src/vehicle/vehicle";

const harshit_Car = VehicleFactory.createVehicle(VehicleType.CAR, generateRandomId())


const amb_lot = new ParkingLot()

// parking spots
const spot1Bike = new ParkingSpot(generateRandomId(),SpotSize.SMALL)
const spot2Bike = new ParkingSpot(generateRandomId(),SpotSize.SMALL)
const spot3Bike = new ParkingSpot(generateRandomId(),SpotSize.SMALL)

const spot4Car = new ParkingSpot(generateRandomId(),SpotSize.MEDIUM)
const spot5Car = new ParkingSpot(generateRandomId(),SpotSize.MEDIUM)
const spot6Car = new ParkingSpot(generateRandomId(),SpotSize.MEDIUM)

const spot7Bus = new ParkingSpot(generateRandomId(),SpotSize.LARGE)
// parking spots


amb_lot.addParkingSpot(spot1Bike)
amb_lot.addParkingSpot(spot2Bike)
amb_lot.addParkingSpot(spot3Bike)

amb_lot.addParkingSpot(spot4Car)
amb_lot.addParkingSpot(spot5Car)
amb_lot.addParkingSpot(spot6Car)

amb_lot.addParkingSpot(spot7Bus)


const entry1 = new EntranceGate(generateRandomId(), amb_lot)
const entry2 = new EntranceGate(generateRandomId(), amb_lot)

amb_lot.addEntranceGate(entry1)
amb_lot.addEntranceGate(entry2)


const exit1 = new ExitGate(generateRandomId(), amb_lot)
const exit2 = new ExitGate(generateRandomId(), amb_lot)
amb_lot.addExitGate(exit1)
amb_lot.addExitGate(exit2)


const ticket = entry1.processVehicleEntry(harshit_Car)
amb_lot.addTickets(ticket)

setTimeout(()=>{
    exit1.processVehicleExit(ticket.getTicketId(), new UPI())
},7000)

