export interface IDiscount {
  applyDiscount(baseAmount: number): number;
}

export class FlatDiscount implements IDiscount {
  constructor(private flatAmount: number) {}

  applyDiscount(baseAmount: number): number {
    return baseAmount - this.flatAmount;
  }
}

export class PercentageDiscount implements IDiscount {
  constructor(private percentage: number) {}
  
  applyDiscount(baseAmount: number): number {
    return baseAmount - (this.percentage / 100) * baseAmount;
  }
}