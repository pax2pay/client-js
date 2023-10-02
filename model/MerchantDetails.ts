export interface MerchantDetails {
	mcc?: string
	merchantName?: string
	merchantCountry?: string
}
export namespace MerchantDetails {
	export function is(value: MerchantDetails | any): value is MerchantDetails {
		return (
			typeof value == "object" &&
			(value.mcc == undefined || typeof value.mcc == "string") &&
			(value.merchantName == undefined || typeof value.merchantName == "string") &&
			(value.merchantCountry == undefined || typeof value.merchantCountry == "string")
		)
	}
}
