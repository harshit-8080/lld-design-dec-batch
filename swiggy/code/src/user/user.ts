import { Address } from "../address/address";
import { OrderStatus } from "../enum";
import { Order, OrderObserver } from "../order/order";
import { OrderItem } from "../order/orderItem";
import { SwiggyService } from "../swiggyService";

export abstract class User implements OrderObserver {
  constructor(
    private id: string,
    private name: string,
    private phone: string,
  ) {}

  getId(): string {
    return this.id;
  }
  getName(): string {
    return this.name;
  }
  getPhone(): string {
    return this.phone;
  }

  abstract onOrderStatusChange(order: any): void;
}

export class Customer extends User {
  private address: Address;
  private orderHistory: Order[] = [];
  private cart: OrderItem[] = [];

  constructor(id: string, name: string, phone: string, address: Address) {
    super(id, name, phone);
    this.address = address;
  }

  getAddress(): Address {
    return this.address;
  }

  addToOrderHistory(order: Order): void {
    this.orderHistory.push(order);
  }

  getOrderHistory(): Order[] {
    return this.orderHistory;
  }

  addToCart(item: OrderItem): void {
    this.cart.push(item);
  }

  getCart(): OrderItem[] {
    return this.cart;
  }

  onOrderStatusChange(order: Order): void {
    console.log(`
        New Notification for customer - ${this.getName()}
        Order ID: ${order.getId()} 
        Status changed to: ${order.getStatus()}
        `);
  }
}

export class DeliveryAgents extends User {
  private currentAddress: Address;
  private isAvailable: boolean = true;
  private deliveryHistory: any[] = [];

  constructor(id: string, name: string, phone: string) {
    super(id, name, phone);
  }

  addToDeliveryHistory(delivery: Order): void {
    this.deliveryHistory.push(delivery);
  }

  getDeliveryHistory(): Order[] {
    return this.deliveryHistory;
  }

  getCurrentAddress(): Address {
    return this.currentAddress;
  }

  setCurrentAddress(address: Address): void {
    this.currentAddress = address;
  }

  toggleAvailability(): void {
    this.isAvailable = !this.isAvailable;
  }

  isAvailableForDelivery(): boolean {
    return this.isAvailable;
  }

  updateOrderStatus(orderId: string, status: OrderStatus): void {
      const instance = SwiggyService.getInstance()
      instance.updateStatus(orderId, status);
  }

onOrderStatusChange(order: Order): void {
    console.log(`
        New Notification for Delivery Agent - ${this.getName()}
        Order ID: ${order.getId()} 
        Status changed to: ${order.getStatus()}
    `);
  }
}
