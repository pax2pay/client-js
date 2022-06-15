import { FiveFieldsBookingInfoRequest } from "./FiveFieldsBookingInfoRequest"
import { FlightBookingInfoRequest } from "./FlightBookingInfoRequest"
import { HotelBookingInfoRequest } from "./HotelBookingInfoRequest"
import { InvoiceBookingInfoRequest } from "./InvoiceBookingInfoRequest"
import { LegacyBookingInfoRequest } from "./LegacyBookingInfoRequest"

export type BookingInfoRequest =
	| FiveFieldsBookingInfoRequest
	| LegacyBookingInfoRequest
	| HotelBookingInfoRequest
	| FlightBookingInfoRequest
	| InvoiceBookingInfoRequest
