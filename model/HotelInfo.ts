import * as isoly from "isoly"
import { Room } from "./Room"

export interface HotelInfo {
	checkIn?: isoly.Date
	checkOut?: isoly.Date
	hotelName?: string
	rooms?: Room[]
}
