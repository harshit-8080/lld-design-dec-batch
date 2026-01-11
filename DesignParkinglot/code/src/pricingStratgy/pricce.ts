import { VehicleType } from "../enum";

// interface PriceStrategy{
//     calcualePrice(vehicleType: VehicleType, durationCounter: number)
// }

export class PricingStrategyBySecond {
     static secondRate: Map<VehicleType, number> = new Map([
        [VehicleType.BIKE, 10],
        [VehicleType.CAR, 20],
        [VehicleType.BUS, 40]
     ])

    static calcualePrice(vehicleType: VehicleType, durationCounter: number) {

        const rate = PricingStrategyBySecond.secondRate.get(vehicleType)
    

        const firstThreeSecondPrice = rate
        const remaningSecondsPrice = Math.max(0, durationCounter - 3) * 2

        return Math.floor(firstThreeSecondPrice + remaningSecondsPrice)
        
    }
}



// class PricingStrategyByHourly{
//     static hourlyRate: Map<VehicleType, number> = new Map([
//         [VehicleType.BIKE, 100],
//         [VehicleType.CAR, 200],
//         [VehicleType.BUS, 400]
//      ])


//     calcualePrice(vehicleType: VehicleType, durationCounter: number) {
        
//     }
// }
