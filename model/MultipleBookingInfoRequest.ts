import { BookingInfoIdentifier } from "./BookingInfoIdentifier";
import { CardIdentifier } from "./CardIdentifier";

export interface MultipleBookingInfoRequest {
	identifiers: (BookingInfoIdentifier | CardIdentifier)[],
	allowedFormats: string[]
}
