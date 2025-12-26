interface flyable{
    fly(): void;
}

class Bird{
    walk() {
        console.log("Walking >>>>>>>");
    }
    eat() {
        console.log("Eating >>>>>>>");
    }
    sleep() {
        console.log("Sleeping >>>>>>>");
    }
}

class Eagle extends Bird implements flyable {
    fly() {
        console.log("Flying >>>>>>>");
    }
    fight() {
        console.log("Fighting >>>>>>>");
    }
}


class Ostrich extends Bird {}



