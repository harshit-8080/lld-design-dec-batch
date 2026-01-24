import { Address } from "../address/address";
import { OrderStatus } from "../enum";
import { Menu } from "../menu/menu";
import { Order, OrderObserver } from "../order/order";
import { SwiggyService } from "../swiggyService";

export class Restaurant implements OrderObserver {
  constructor(
    private id: string,
    private name: string,
    private address: Address,
    private menu: Menu,
    private availability: boolean = true,
    private orderHistory: Order[] = [],
  ) {}

  getId(): string {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getAddress(): Address {
    return this.address;
  }

  getMenu(): Menu {
    return this.menu;
  }

  isAvailable(): boolean {
    return this.availability;
  }

  toggleAvailability(): void {
    this.availability = !this.availability;
  }

  addToOrderHistory(order: Order): void {
    this.orderHistory.push(order);
  }

  getOrderHistory(): Order[] {
    return this.orderHistory;
  }

  updateOrderStatus(orderId: string, status: OrderStatus): void {
    const instance = SwiggyService.getInstance()
    instance.updateStatus(orderId, status);
  }

  onOrderStatusChange(order: Order): void {
    console.log(`
        New Notification for Restaurant - ${this.getName()}
        Order ID: ${order.getId()} 
        Status changed to: ${order.getStatus()}
    `);
  }
}
