import { SpotSize, VehicleType } from "../enum";

export interface IVehicle {
  getVehicleNumber(): string;
  getRequiredSpotSize(): SpotSize;
  getVehicleType(): VehicleType
}

export class Bike implements IVehicle {
  constructor(
    private vehicleNumber: string,
    private vehicleType: VehicleType = VehicleType.BIKE,
  ) {}

  getVehicleNumber(): string {
    return this.vehicleNumber;
  }

  getVehicleType(): VehicleType{
    return this.vehicleType
  }

  getRequiredSpotSize(): SpotSize {
    return SpotSize.SMALL;
  }
}

export class Car implements IVehicle {
  constructor(
    private vehicleNumber: string,
    private vehicleType: VehicleType = VehicleType.CAR,
  ) {}

  getVehicleNumber(): string {
    return this.vehicleNumber;
  }


  getVehicleType(): VehicleType{
    return this.vehicleType
  }

  getRequiredSpotSize(): SpotSize {
    return SpotSize.MEDIUM;
  }
}

export class Bus implements IVehicle {
  constructor(
    private vehicleNumber: string,
    private vehicleType: VehicleType = VehicleType.BUS,
  ) {}

  getVehicleNumber(): string {
    return this.vehicleNumber;
  }

  getVehicleType(): VehicleType{
    return this.vehicleType
  }

  getRequiredSpotSize(): SpotSize {
    return SpotSize.LARGE;
  }
}

export class VehicleFactory {
  static createVehicle(type: VehicleType, vehicleNumber: string): IVehicle {
    switch (type) {
      case VehicleType.BIKE:
        return new Bike(vehicleNumber);
      case VehicleType.CAR:
        return new Car(vehicleNumber);
      case VehicleType.BUS:
        return new Bus(vehicleNumber);
    }
  }
}
