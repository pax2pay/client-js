import { MerchantDetails } from "./MerchantDetails"
import { ProviderCode } from "./ProviderCode"

export interface StatementRowIds {
	rowId: string
	providerCode: ProviderCode
	providerCardId?: string
	orderId?: string
	providerTransferId?: string
	merchantDetails?: MerchantDetails
}

export namespace StatementRowIds {
	export function is(value: StatementRowIds | any): value is StatementRowIds {
		return (
			typeof value == "object" &&
			typeof value.rowId == "string" &&
			ProviderCode.is(value.providerCode) &&
			(value.providerCardId == undefined || typeof value.providerCardId == "string") &&
			(value.orderId == undefined || typeof value.orderId == "string") &&
			(value.providerTransferId == undefined || typeof value.providerTransferId == "string") &&
			(value.merchantDetails == undefined || MerchantDetails.is(value.merchantDetails))
		)
	}
}
