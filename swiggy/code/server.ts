import { Address } from "./src/address/address";
import { FlatDiscount } from "./src/discounts/discount";
import { getRandomId, OrderStatus } from "./src/enum";
import { Menu } from "./src/menu/menu";
import { MenuItem } from "./src/menu/menuItem";
import { Order } from "./src/order/order";
import { OrderItem } from "./src/order/orderItem";
import { UPI } from "./src/payment/payment";
import { SwiggyService } from "./src/swiggyService";

class SwiggyDemo {
  static init() {
    const swiggy = SwiggyService.getInstance();

    const hashit_address = new Address(
      getRandomId(),
      "kondapur",
      "Hyderabad",
      "500084",
    );
    const harshit_customer = swiggy.createCustomer(
      getRandomId(),
      "Harshit Raj",
      "9999999999",
      hashit_address,
    );

    // menu items for Pista House
    const biryani_item = new MenuItem(getRandomId(), "Biryani", 250, true);
    const chicken65_item = new MenuItem(getRandomId(), "Chicken65", 300, true);
    const PBM_item = new MenuItem(getRandomId(), "PBM", 200, true);
    const salami_item = new MenuItem(getRandomId(), "Salami", 100, true);

    // final menu for Pista House
    const pistaMenu = new Menu();
    pistaMenu.addMenuItem(biryani_item);
    pistaMenu.addMenuItem(chicken65_item);
    pistaMenu.addMenuItem(PBM_item);
    pistaMenu.addMenuItem(salami_item);

    const pistaHouse_address = new Address(
      getRandomId(),
      "kondapur",
      "Hyderabad",
      "500084",
    );
    const pistaHouse_restro = swiggy.createRestaurant(
      getRandomId(),
      "Pista House",
      pistaHouse_address,
      pistaMenu,
    );

    harshit_customer.addToCart(new OrderItem(biryani_item, 2, "spicy"));
    harshit_customer.addToCart(new OrderItem(salami_item, 4, "crispy"));

    // 250 * 2 = 500
    // 100 * 4 = 400
    // total = 900
    // flat discount = 100
    // final amount = 800

    const order_obj = swiggy.makeOrder(
      harshit_customer.getId(),
      pistaHouse_restro.getId(),
      new UPI(),
      new FlatDiscount(200),
    );

    const ravi_agent = swiggy.createDeliveryAgent(
      getRandomId(),
      "Ravi Kumar",
      "8888888888",
    );
    order_obj.assignDeliveryAgent(ravi_agent);

    console.log();
    console.log();
    console.log();

    setTimeout(() => {
      pistaHouse_restro.updateOrderStatus(
        order_obj.getId(),
        OrderStatus.PREPARING,
      );
    }, 3000);

    console.log();
    console.log();
    console.log();

    setTimeout(() => {
      pistaHouse_restro.updateOrderStatus(
        order_obj.getId(),
        OrderStatus.READY_FOR_PICKUP,
      );
    }, 5000);

    console.log();
    console.log();
    console.log();

    setTimeout(() => {
      pistaHouse_restro.updateOrderStatus(
        order_obj.getId(),
        OrderStatus.OUT_FOR_DELIVERY,
      );
    }, 6000);

    console.log();
    console.log();
    console.log();

    setTimeout(() => {
      ravi_agent.updateOrderStatus(order_obj.getId(), OrderStatus.DELIVERED);
    }, 8000);
  }
}


SwiggyDemo.init()