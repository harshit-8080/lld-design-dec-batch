import { BookingManager } from "./src/booking/bookingManager";
import { City } from "./src/city/city";
import { generateId, SeatLayout, SeatType } from "./src/enum";
import { UPI } from "./src/payment/payment";
import { Screen } from "./src/screen/screen";
import { Show } from "./src/show/show";
import { Threater } from "./src/threater/threater";
import { User } from "./src/user/user";


const hyd = new City(generateId(), "hyd")

const amb = new Threater(generateId(), "AMB", hyd)

const s1 = new Screen(generateId(),"screen1", amb)
s1.configureSeats([
    { type: SeatType.PLATINUM, count: 5 },
    { type: SeatType.GOLD, count: 2 },
    { type: SeatType.SILVER, count: 3 },
])


const kgf_show = new Show(generateId(), "KGF Movie", s1, new Date(), [
    { type: SeatType.PLATINUM, price: 300 },
    { type: SeatType.GOLD, price: 200 },
    { type: SeatType.SILVER, price: 100 },
],amb)


const rrr_show = new Show(generateId(), "RRR Movie", s1, new Date(), [
    { type: SeatType.PLATINUM, price: 300 },
    { type: SeatType.GOLD, price: 200 },
    { type: SeatType.SILVER, price: 100 },
],amb)

// kgf_show.getSeatStatus()

const harshit = new User(generateId(), "harshit")


const movieBooking = BookingManager.getInstance()

movieBooking.bookTicket(harshit,kgf_show, ["A1", "A2", "A3"], new UPI())

// kgf_show.getSeatStatus()
// rrr_show.getSeatStatus()