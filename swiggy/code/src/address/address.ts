export class Address {
    constructor(
        private id: string,
        private street: string,
        private city: string,
        private pin: string
    ){}

    getId(): string {
        return this.id;
    }

    getCity(): string{
        return this.city;
    }

    getDetails(): string {
        return `${this.street}, ${this.city} - ${this.pin}`;
    }
}