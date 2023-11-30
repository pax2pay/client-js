import { MerchantType } from "./MerchantType"

export interface MerchantRequest {
	name: string
	mcc?: string
	type?: MerchantType
}

export namespace MerchantRequest {
	export function is(value: MerchantRequest | any): value is MerchantRequest {
		return (
			typeof value == "object" &&
			typeof value.name == "string" &&
			(typeof value.mcc == "string" || value.mcc == undefined) &&
			(MerchantType.is(value.type) || value.type == undefined)
		)
	}
}
