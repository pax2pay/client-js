import * as isoly from "isoly"
import { ProviderCode } from "../Provider/ProviderCode"
import { CardScheme } from "./CardScheme"
import { CardTypeSpecificationFlag } from "./CardTypeSpecificationFlag"
import { FundingType } from "./FundingType"

export interface CardTypeResponse {
	providerCode?: ProviderCode
	cardTypeId?: string
	description?: string
	scheme?: CardScheme
	funding?: FundingType
	currencies?: isoly.Currency[]
	flags?: CardTypeSpecificationFlag[]
	bins?: string[]
	preActive?: boolean
	discontinued?: boolean
}

export namespace CardTypeResponse {
	export function is(value: CardTypeResponse | any): value is CardTypeResponse {
		return (
			typeof value == "object" &&
			(value.providerCode == undefined || ProviderCode.is(value.providerCode)) &&
			(value.cardTypeId == undefined || typeof value.cardTypeId == "string") &&
			(value.description == undefined || typeof value.description == "string") &&
			(value.scheme == undefined || CardScheme.is(value.scheme)) &&
			(value.funding == undefined || FundingType.is(value.funding)) &&
			(value.currencies == undefined ||
				(Array.isArray(value.currencies) && value.currencies.every((item: any) => isoly.Currency.is(item)))) &&
			(value.flags == undefined ||
				(Array.isArray(value.flags) && value.flags.every((item: any) => CardTypeSpecificationFlag.is(item)))) &&
			(value.bins == undefined ||
				(Array.isArray(value.bins) && value.bins.every((item: any) => typeof item == "string"))) &&
			(value.preActive == undefined || typeof value.preActive == "boolean") &&
			(value.discontinued == undefined || typeof value.discontinued == "boolean")
		)
	}
}
