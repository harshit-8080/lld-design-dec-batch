// only product order related operations
class OrderService{
    createOrder(orderData: any) {
        console.log("creating order");
    }
    updateOrder(orderId: string, orderData: any) {
        console.log("order is updated");
    }
}


// only tax related operations
class TaxService{
    calculateTax(order:any){
        console.log("calculating tax");
    }

}

// only database related operations
class DatabaseService{
    saveToDatabase(order:any){
        console.log("saving order to database");
    }
}