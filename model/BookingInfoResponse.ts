import { FiveFieldsBookingInfoResponse } from "./FiveFieldsBookingInfoResponse"
import { FlightBookingInfoResponse } from "./FlightBookingInfoResponse"
import { HotelBookingInfoResponse } from "./HotelBookingInfoResponse"
import { InvoiceBookingInfoResponse } from "./InvoiceBookingInfoResponse"

export type BookingInfoResponse =
	| FiveFieldsBookingInfoResponse
	| HotelBookingInfoResponse
	| InvoiceBookingInfoResponse
	| FlightBookingInfoResponse
