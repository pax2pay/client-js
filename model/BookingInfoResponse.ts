import { BookingInfo } from "./BookingInfo"
import { FiveFieldsBookingInfoResponse } from "./FiveFieldsBookingInfoResponse"
import { FlightBookingInfoResponse } from "./FlightBookingInfoResponse"
import { HotelBookingInfoResponse } from "./HotelBookingInfoResponse"
import { InvoiceBookingInfoResponse } from "./InvoiceBookingInfoResponse"

export type BookingInfoResponse =
	| BookingInfo
	| FiveFieldsBookingInfoResponse
	| HotelBookingInfoResponse
	| InvoiceBookingInfoResponse
	| FlightBookingInfoResponse
