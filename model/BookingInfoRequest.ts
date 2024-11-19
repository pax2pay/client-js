import { FiveFieldsBookingInfoRequest } from "./FiveFieldsBookingInfoRequest"
import { FlightBookingInfoRequest } from "./FlightBookingInfoRequest"
import { HotelBookingInfoRequest } from "./HotelBookingInfoRequest"
import { InvoiceBookingInfoRequest } from "./InvoiceBookingInfoRequest"

export type BookingInfoRequest =
	| FiveFieldsBookingInfoRequest
	| HotelBookingInfoRequest
	| FlightBookingInfoRequest
	| InvoiceBookingInfoRequest

export namespace BookingInfoRequest {
	export function is(value: BookingInfoRequest | any): value is BookingInfoRequest {
		return (
			FiveFieldsBookingInfoRequest.is(value) ||
			HotelBookingInfoRequest.is(value) ||
			InvoiceBookingInfoRequest.is(value) ||
			FlightBookingInfoRequest.is(value)
		)
	}
}
