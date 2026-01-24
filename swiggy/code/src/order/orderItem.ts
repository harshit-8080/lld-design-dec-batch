import { MenuItem } from "../menu/menuItem";

export class OrderItem {
    constructor(
        private item: MenuItem,
        private quantity: number,
        private specialInstructions?: string
    ){}

    getItem(): MenuItem {
        return this.item;
    }

    getQuantity(): number {
        return this.quantity;
    }
}
