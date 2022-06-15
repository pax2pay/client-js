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

export namespace BookingInfoResponse {
	export function is(value: BookingInfoResponse | any): value is BookingInfoResponse {
		return (
			FiveFieldsBookingInfoResponse.is(value) ||
			HotelBookingInfoResponse.is(value) ||
			InvoiceBookingInfoResponse.is(value) ||
			FlightBookingInfoResponse.is(value) ||
			SummaryBookingInfoResponse.is(value)
		)
	}
}
