import * as isoly from "isoly"
import { InvokingSystem } from "../InvokingSystem"
import { CriteriaProductType } from "./CriteriaProductType"
/**
 * Criteria request - defines which search criteria will be able to return which cards. A criteria matches if the criterion (for example, supplier) either matches the value (ie, the supplier searched for is the same), or if the criteria has an empty value for that field. Positive matches are ordered higher than null matches.
 */
export interface Criteria {
	usernames?: string[]
	categories?: string[]
	currencies: isoly.Currency[]
	maxAmount?: number
	productTypes?: CriteriaProductType[]
	suppliers?: string[]
	bookingSources?: InvokingSystem[]
	ruleStartDate?: isoly.Date
	ruleEndDate?: isoly.Date
	rank?: number
	negated?: boolean
}

export namespace Criteria {
	export function is(value: Criteria | any): value is Criteria {
		return (
			typeof value == "object" &&
			(value.usernames == undefined ||
				(Array.isArray(value.usernames) && value.usernames.every((item: any) => typeof item == "string"))) &&
			(value.categories == undefined ||
				(Array.isArray(value.categories) && value.categories.every((item: any) => typeof item == "string"))) &&
			Array.isArray(value.currencies) &&
			value.currencies.every((item: any) => isoly.Currency.is(item)) &&
			(value.maxAmount == undefined || typeof value.maxAmount == "number") &&
			(value.productTypes == undefined ||
				(Array.isArray(value.productTypes) && value.productTypes.every((item: any) => CriteriaProductType.is(item)))) &&
			(value.suppliers == undefined ||
				(Array.isArray(value.suppliers) && value.suppliers.every((item: any) => typeof item == "string"))) &&
			(value.bookingSources == undefined ||
				(Array.isArray(value.bookingSources) && value.bookingSources.every((item: any) => InvokingSystem.is(item)))) &&
			(value.ruleStartDate == undefined || isoly.Date.is(value.ruleStartDate)) &&
			(value.ruleEndDate == undefined || isoly.Date.is(value.ruleEndDate)) &&
			(value.rank == undefined || typeof value.rank == "number") &&
			(value.negated == undefined || value.negated == "boolean")
		)
	}
}
