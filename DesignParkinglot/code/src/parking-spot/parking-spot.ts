import { error } from "console";
import { SpotSize, SpotStatus } from "../enum";
import { IVehicle } from "../vehicle/vehicle";

export class ParkingSpot{
    constructor(
        private spotId: string,
        private spotSize: SpotSize,
        private spotStatus: SpotStatus = SpotStatus.AVAILABLE,
        private parkedVehicle: IVehicle = null,
    ){}

    getSpotId(): string{
        return this.spotId
    }

    getSpotSize(): SpotSize{
        return this.spotSize
    }

    getSpotStatus(): SpotStatus{
        return this.spotStatus
    }

    getParkedVehicle(): IVehicle{

        if(!this.parkedVehicle){
            throw error("no vehicle parked")
            return
        }
        return this.parkedVehicle
    }

    setSpotStatus(newStatus: SpotStatus) {
        this.spotStatus = newStatus
    }

    isAvailable(): boolean{
        return this.spotStatus == SpotStatus.AVAILABLE ? true : false
    }

    assignVehicleToSpot(vehicle: IVehicle){
        if(!this.isAvailable()){
            throw error("spot is not available")
        }
        this.parkedVehicle = vehicle
        this.setSpotStatus(SpotStatus.OCCUPIED) // imppppppppp
    }

    releaseSpot(){
        this.parkedVehicle = null
        this.setSpotStatus(SpotStatus.AVAILABLE)
    }


}