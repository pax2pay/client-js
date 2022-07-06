import * as isoly from "isoly"
import { ProviderCode } from "../Provider/ProviderCode"
import { CardScheme } from "./CardScheme"
import { CardTypeSpecificationFlag } from "./CardTypeSpecificationFlag"
import { FundingType } from "./FundingType"

/**
 * Search request for card types.
 */
export interface CardTypeSearchRequest {
	providerCode?: ProviderCode
	currency?: isoly.Currency
	description?: string
	descriptionContains?: string
	scheme?: CardScheme
	fundingType?: FundingType
	flags?: CardTypeSpecificationFlag[]
	bin?: string
	status?: "ACTIVE" | "DEPRECATED" | "PREACTIVE" | "DISCONTINUED"
}

export namespace CardTypeSearchRequest {
	export function is(value: CardTypeSearchRequest | any): value is CardTypeSearchRequest {
		return (
			typeof value == "object" &&
			(value.providerCode == undefined || ProviderCode.is(value.providerCode)) &&
			(value.currency == undefined || isoly.Currency.is(value.currency)) &&
			(value.description == undefined || value.description == "string") &&
			(value.descriptionContains == undefined || value.descriptionContains == "string") &&
			(value.scheme == undefined || CardScheme.is(value.scheme)) &&
			(value.fundingType == undefined || FundingType.is(value.fundingType)) &&
			(value.flags == undefined ||
				(Array.isArray(value.flags) && value.flags.every((item: any) => CardTypeSpecificationFlag.is(item)))) &&
			(value.bin == undefined || value.bin == "string") &&
			(value.status == undefined ||
				value.status == "ACTIVE" ||
				value.status == "DEPRECATED" ||
				value.status == "PREACTIVE" ||
				value.status == "DISCONTINUED")
		)
	}
}
