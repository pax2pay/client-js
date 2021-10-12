import { BookingInfo } from "./BookingInfo"
import { BookingInfoIdentifier } from "./BookingInfoIdentifier"
import { CardIdentifier } from "./CardIdentifier"	

export interface MultipleBookingInfoResponse {
	missing?: (BookingInfoIdentifier | CardIdentifier)[]
	bookingInfos?: {
		identifier: BookingInfoIdentifier | CardIdentifier,
		format: string,
		bookingInfo: BookingInfo
	}[]
}
