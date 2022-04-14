import { BookingInfoType } from "./BookingInfoType"

export interface BookingInfoV2Response {
	type: BookingInfoType
	bookingInfoIdentifier: string
	trackingId: string
}
