export class MenuItem {
    constructor(
        private id: string,
        private name: string,
        private price: number,
        private availability: boolean
    ){}

    getId(): string {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    getPrice(): number {
        return this.price;
    }

    isAvailable(): boolean {
        return this.availability;
    }

    toggleAvailability(): void {
        this.availability = !this.availability;
    }
}