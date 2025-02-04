import { Currency, Date } from "isoly"
import { isly } from "isly"
import { ProductType } from "../model/ProductType"
import { InvokingSystem } from "./InvokingSystem"
/**
 * Criteria request - defines which search criteria will be able to return which cards. A criteria matches if the criterion (for example, supplier) either matches the value (ie, the supplier searched for is the same), or if the criteria has an empty value for that field. Positive matches are ordered higher than null matches.
 */
export interface Criteria {
	usernames?: string[]
	categories?: string[]
	currencies: Currency[]
	maxAmount?: number
	productTypes?: ProductType[]
	suppliers?: string[]
	bookingSources?: InvokingSystem[]
	ruleStartDate?: Date
	ruleEndDate?: Date
	rank?: number
	negated?: boolean
}

export namespace Criteria {
	export const type = isly.object<Criteria>({
		usernames: isly.string().array().optional(),
		categories: isly.string().array().optional(),
		currencies: isly.fromIs("Currency", Currency.is).array(),
		maxAmount: isly.number().optional(),
		productTypes: isly.fromIs("ProductType", ProductType.is).array().optional(),
		suppliers: isly.string().array().optional(),
		bookingSources: InvokingSystem.type.array().optional(),
		ruleStartDate: isly.fromIs("Date", Date.is).optional(),
		ruleEndDate: isly.fromIs("Date", Date.is).optional(),
		rank: isly.number().optional(),
		negated: isly.boolean().optional(),
	})
	export const is = type.is
}
