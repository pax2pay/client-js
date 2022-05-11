import { FiveFieldsBookingInfoResponse } from "./FiveFieldsBookingInfoResponse"
import { FlightBookingInfoResponse } from "./FlightBookingInfoResponse"
import { HotelBookingInfoResponse } from "./HotelBookingInfoResponse"

export type BookingInfoResponse = FiveFieldsBookingInfoResponse | HotelBookingInfoResponse | FlightBookingInfoResponse
