import { BookingInfo, BookingInfoIdentifier, CardIdentifier } from ".";

export interface MultipleBookingInfoResponse {
	missing?: (BookingInfoIdentifier | CardIdentifier)[]
	bookingInfos?: {
		identifier: BookingInfoIdentifier | CardIdentifier,
		format: string,
		bookingInfo: BookingInfo
	}[]
}
