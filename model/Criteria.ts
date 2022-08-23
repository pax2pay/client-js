import { InvokingSystem } from "./InvokingSystem"

/**
 * Criteria request - defines which search criteria will be able to return which cards. A criteria matches if the criterion (for example, supplier) either matches the value (ie, the supplier searched for is the same), or if the criteria has an empty value for that field. Positive matches are ordered higher than null matches.
 */
export interface Criteria {
	usernames?: string[]
	categories?: string[]
	currencies: string[]
	maxAmount?: number
	productTypes?: Array<
		| "FLIGHT"
		| "ACCOMMODATION"
		| "ANY"
		| "CAR_PARKING"
		| "CAR_HIRE"
		| "TRANSFER"
		| "INSURANCE"
		| "PACKAGE"
		| "RAIL"
		| "CRUISE"
		| "ATTRACTION"
		| "BAGGAGE_TRACKING"
	>
	suppliers?: string[]
	bookingSources?: Array<InvokingSystem>
	ruleStartDate?: string
	ruleEndDate?: string
	rank?: number
	negated?: boolean
}
