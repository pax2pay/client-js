import { BookingInfoType } from "./BookingInfoType"

export interface MinimalBookingInfo {
	type: BookingInfoType
	leadPassengerName: string
	agentBookingReference: string
}
