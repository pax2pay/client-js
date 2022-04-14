import * as isoly from "isoly"
import { BookingInfoV2Response } from "./BookingInfoV2Response"
import { Passengers } from "./Passengers"
import { References } from "./References"

export interface HotelBookingInfoResponse extends BookingInfoV2Response {
	passengers: Passengers
	hotel: HotelInfo
	references: References
	cost: number
	currency: isoly.Currency
	timestamp: isoly.DateTime
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
