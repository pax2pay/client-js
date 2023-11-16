import { MerchantType } from "./MerchantType"

export interface SuggestionMerchantRequest {
	id?: string
	name?: string
	mcc?: string
	type?: MerchantType
}

export namespace SuggestionMerchantRequest {
	export function is(value: SuggestionMerchantRequest | any): value is SuggestionMerchantRequest {
		return (
			typeof value == "object" &&
			(typeof value.id == "string" || value.id == undefined) &&
			(typeof value.name == "string" || value.name == undefined) &&
			(typeof value.mcc == "string" || value.mcc == undefined) &&
			(MerchantType.is(value.type) || value.type == undefined) &&
			Object.keys(value).length > 0
		)
	}
}
