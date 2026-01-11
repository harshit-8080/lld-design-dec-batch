import { privateDecrypt } from "crypto";
import { SpotSize } from "../enum";
import { EntranceGate } from "../gates/entranceGate";
import { ExitGate } from "../gates/exitGate";
import { ParkingSpot } from "../parking-spot/parking-spot";
import { Ticket } from "../ticket/ticket";

export class ParkingLot {
  constructor(
    private parkingSpots: Map<string, ParkingSpot> = new Map(),
    private entranceGates: Map<string, EntranceGate> = new Map(),
    private exitGates: Map<string, ExitGate> = new Map(),
    private tickets: Map<string, Ticket> = new Map(),
    private spotBySize: Map<SpotSize, ParkingSpot[]> = new Map(),
  ) {
    this.spotBySize.set(SpotSize.SMALL, []);
    this.spotBySize.set(SpotSize.MEDIUM, []);
    this.spotBySize.set(SpotSize.LARGE, []);

    /**
     * {
     *  SMALL : [spot1Bike, spot1Bike, spot1Bike]
     *  MEDIUM : [spot1Car, spot1Car, spot1Car]
     *  LARGE : []
     * }
     */
  }

  addParkingSpot(newParkingSpot: ParkingSpot) {
    this.parkingSpots.set(newParkingSpot.getSpotId(), newParkingSpot);

    // important........
    this.spotBySize.get(newParkingSpot.getSpotSize()).push(newParkingSpot);
  }

  addEntranceGate(newEntryGate: EntranceGate) {
    this.entranceGates.set(newEntryGate.getGateId(), newEntryGate);
  }

  addExitGate(newExitGate: ExitGate) {
    this.exitGates.set(newExitGate.getGateId(), newExitGate);
  }

  addTickets(newTicket: Ticket) {
    this.tickets.set(newTicket.getTicketId(), newTicket);
  }

  getTicketById(ticketId: string){
    return this.tickets.get(ticketId)
  }

  getSpotByTicketId(ticketId){
    const spotId = this.tickets.get(ticketId).getSpotId()
    const spot = this.parkingSpots.get(spotId)
    return spot

  }

  getRequiredSpotSizeByVehicleType(
    requiredSpotSize: SpotSize,
  ): ParkingSpot {
    // exact search
    const allSpotsByRequriedSize = this.spotBySize.get(requiredSpotSize);

    for (let i = 0; i < allSpotsByRequriedSize.length; i++) {
      if (allSpotsByRequriedSize[i].isAvailable()) {
        return allSpotsByRequriedSize[i];
      }
    }

    // if exact spot not available assign a larger space
    // for medium -  you can search in large spots
    // for small - you can search in medium and the search in large
    if (SpotSize.MEDIUM == requiredSpotSize) {
      const allSpotsByRequriedSize = this.spotBySize.get(SpotSize.LARGE);

      for (let i = 0; i < allSpotsByRequriedSize.length; i++) {
        if (allSpotsByRequriedSize[i].isAvailable()) {
          return allSpotsByRequriedSize[i];
        }
      }
    } else if (SpotSize.SMALL == requiredSpotSize) {
      let allSpotsByRequriedSize = this.spotBySize.get(SpotSize.MEDIUM);

      for (let i = 0; i < allSpotsByRequriedSize.length; i++) {
        if (allSpotsByRequriedSize[i].isAvailable()) {
          return allSpotsByRequriedSize[i];
        }
      }

      allSpotsByRequriedSize = this.spotBySize.get(SpotSize.LARGE);

      for (let i = 0; i < allSpotsByRequriedSize.length; i++) {
        if (allSpotsByRequriedSize[i].isAvailable()) {
          return allSpotsByRequriedSize[i];
        }
      }
    }

    return null;
  }
}
