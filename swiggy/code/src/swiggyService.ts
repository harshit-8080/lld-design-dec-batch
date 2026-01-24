import { Address } from "./address/address";
import { IDiscount } from "./discounts/discount";
import { getRandomId, OrderStatus, PaymentStatus } from "./enum";
import { Menu } from "./menu/menu";
import { Order } from "./order/order";
import { IPayment } from "./payment/payment";
import { Restaurant } from "./restaurants/restro";
import { Customer, DeliveryAgents } from "./user/user";

export class SwiggyService {

    static instance: SwiggyService = new SwiggyService(); // eager initialization
    static getInstance(): SwiggyService {
        return SwiggyService.instance;
    }
    
    private constructor(
        private customers: Map<string, Customer> = new Map(),
        private deliveryAgents: Map<string, DeliveryAgents> = new Map(),
        private restaurants: Map<string, Restaurant> = new Map(),
        private orders: Map<string, Order> = new Map(),
    ) {}


    createCustomer(id: string, name: string, phone: string, address: Address): Customer {
        const customer = new Customer(id, name, phone, address);
        this.customers.set(id, customer);
        return customer;
    }

    createDeliveryAgent(id: string, name: string, phone: string): DeliveryAgents {
        const agent = new DeliveryAgents(id, name, phone);
        this.deliveryAgents.set(id, agent);
        return agent;
    }

    createRestaurant(id: string, name: string, address: Address, menu: Menu): Restaurant {
        const restaurant = new Restaurant(id, name, address, menu);
        this.restaurants.set(id, restaurant);
        return restaurant;
    }  

    makeOrder(
        customerId: string,
        restaurantId: string,
        paymentStrategy: IPayment,
        discountStrategy?: IDiscount
    ): Order {

        const customer = this.customers.get(customerId);
        const restaurant = this.restaurants.get(restaurantId);

        // get from customer cart
        const orderItems = customer.getCart()

        // calculate the base amount before any discounts
        const baseAmount = orderItems.reduce((sum, item)=>{
            return sum + (item.getItem().getPrice() * item.getQuantity());
        }, 0)


        // check and apply discount if any 
        const amountAfterDiscount = discountStrategy ? discountStrategy.applyDiscount(baseAmount) : baseAmount;
        
        // make a payment
        const paymentStatus = paymentStrategy.pay(amountAfterDiscount);

        if(paymentStatus == PaymentStatus.SUCCESS){
            const order = new Order(
                getRandomId(),
                customer,
                restaurant,
                orderItems,
                amountAfterDiscount,
                paymentStrategy,
                discountStrategy
            )

            this.orders.set(order.getId(), order);

            customer.addToOrderHistory(order);
            restaurant.addToOrderHistory(order);

            order.setStatus(OrderStatus.PENDING)

            return order
        }
        else {
            throw new Error("Payment Failed! Order cannot be placed.")
        }

    }

    cancelOrder(orderId: string): void {
        const order = this.orders.get(orderId);

        if(order.getStatus() == OrderStatus.PENDING){
            order.setStatus(OrderStatus.CANCELLED);

            const paymentStrategy = order.getPaymentStrategy()
            paymentStrategy.refund(order.getTotalAmount());
        }
        else {
            throw new Error("Order cannot be cancelled at this stage.")
        }
    }

    updateStatus(orderId: string, newStatus: OrderStatus): void {
        const order = this.orders.get(orderId);
        order.setStatus(newStatus);
    }
}