export class Vehicle {
    public vehicleNumber: string
    public ownerName: string
    public color: string

    constructor(vehicleNumber: string, ownerName: string, color: string){
        this.vehicleNumber = vehicleNumber
        this.ownerName = ownerName
        this.color = color
        console.log("parent constructor")
    }

    public getVehicleNumber():string{
        return this.vehicleNumber
    }
}


export class Car extends Vehicle {
    public seat: number
    public doors: number

    constructor(vehicleNumber: string, ownerName: string, color: string, seat: number, doors: number) {
        super(vehicleNumber,ownerName,color) 
        this.seat = seat
        this.doors = doors
        console.log("child constructor")
    }
}



export class ElectricCar extends Car {
    private range:number
}

