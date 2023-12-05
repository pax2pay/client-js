import { Date } from "isoly"
import { SuggestedOptions } from "./SuggestedOptions"

export interface SuggestedDelivery {
	requirement: "suggested" | "required" | "none"
	to?: SuggestedOptions<string>
	message?: SuggestedOptions<string>
	linkExpiry?: SuggestedOptions<Date>
}
