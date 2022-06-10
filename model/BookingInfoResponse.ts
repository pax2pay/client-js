import { FiveFieldsBookingInfoResponse } from "./FiveFieldsBookingInfoResponse"
import { FlightBookingInfoResponse } from "./FlightBookingInfoResponse"
import { HotelBookingInfoResponse } from "./HotelBookingInfoResponse"
import { InvoiceBookingInfoResponse } from "./InvoiceBookingInfoResponse"
import { SummaryBookingInfoResponse } from "./SummaryBookingInfoResponse"

export type BookingInfoResponse =
	| FiveFieldsBookingInfoResponse
	| HotelBookingInfoResponse
	| InvoiceBookingInfoResponse
	| FlightBookingInfoResponse
	| SummaryBookingInfoResponse
