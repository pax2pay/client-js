import { BookingInfoResponse } from "./BookingInfoResponse"
import { BookingInfoType } from "./BookingInfoType"
import { SuggestedOptions } from "./SuggestedOptions"
export interface SuggestedCardMetaOptions {
	requirement: "suggested" | "required" | "none"
	type?: SuggestedOptions<BookingInfoType>
	value?: SuggestedOptions<BookingInfoResponse>
}
