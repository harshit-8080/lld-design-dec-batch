import { IDiscount } from "../discounts/discount";
import { OrderStatus } from "../enum";
import { IPayment } from "../payment/payment";
import { Restaurant } from "../restaurants/restro";
import { Customer, DeliveryAgents } from "../user/user";
import { OrderItem } from "./orderItem";

export interface OrderObserver {
    onOrderStatusChange(order: Order): void;
}

export class Order {
    constructor(
        private id: string,
        private customer: Customer,
        private restaurant: Restaurant,
        private items: OrderItem[],
        private totalAmount: number,
        private paymentStrategy: IPayment,
        private discountStrategy: IDiscount,
        private orderTime: Date = new Date(),
        private status: OrderStatus = OrderStatus.PENDING,
        private deliveryAgent: DeliveryAgents = null,
        private observers: OrderObserver[] = []
    ){
        this.addObserver(this.customer)
        this.addObserver(this.restaurant)
    }

    getId(): string {
        return this.id;
    }

    getCustomer(): Customer {
        return this.customer;
    }

    getRestaurant(): Restaurant {
        return this.restaurant;
    }

    getItems(): OrderItem[] {
        return this.items;
    }

    getTotalAmount(): number {
        return this.totalAmount;
    }

    getOrderTime(): Date {
        return this.orderTime;
    }

    getStatus(): OrderStatus {
        return this.status;
    }

    getPaymentStrategy(): IPayment {
        return this.paymentStrategy;
    }

    getDeliveryAgent(): DeliveryAgents {
        return this.deliveryAgent;
    }

    setStatus(newStatus: OrderStatus): void {
        this.status = newStatus;
        this.notifyStatusChange()
    }

    assignDeliveryAgent(agent: DeliveryAgents): void {
        if(!agent.isAvailableForDelivery()){
            throw new Error("Delivery Agent is not available");
        }

        this.deliveryAgent = agent;
        agent.addToDeliveryHistory(this);
        this.addObserver(agent); // we will going to notify delivery agent once assigned
    }

    addObserver(observer: OrderObserver): void{
        this.observers.push(observer);
        // customer
        // restaurant
        // delivery agent
    }
    
    notifyStatusChange(): void {
        this.observers.forEach(observer => observer.onOrderStatusChange(this));
    }
}