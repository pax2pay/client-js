import * as isoly from "isoly"
import { Passengers } from "./Passengers"
import { References } from "./References"

export interface HotelBookingInfoRequest {
	hotel?: HotelInfo
	references?: References
	passengers?: Passengers
	cost?: number
	currency?: isoly.Currency
	timestamp?: isoly.DateTime
}

interface HotelInfo {
	checkIn?: isoly.Date
	checkOut?: isoly.Date
	hotelName?: string
	rooms?: Room[]
}

interface Room {
	name?: string
	board?: Board
}

type Board = "AI" | "FB" | "HB" | "BB" | "SC" | "RO"

//AI("All Inclusive"),FB("Full Board"),HB("Half Board"),BB("Bed & Breakfast"),SC("Self Catering"),RO("Room Only");
