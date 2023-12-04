import { MerchantType } from "./MerchantType"

export interface MerchantResponse {
	id?: string
	name?: string
	mcc?: string
	type?: MerchantType
}

export namespace MerchantResponse {
	export function is(value: MerchantResponse | any): value is MerchantResponse {
		return (
			typeof value == "object" &&
			(typeof value.id == "string" || value.id == undefined) &&
			(typeof value.name == "string" || value.name == undefined) &&
			(typeof value.mcc == "string" || value.mcc == undefined) &&
			(MerchantType.is(value.type) || value.type == undefined)
		)
	}
}
