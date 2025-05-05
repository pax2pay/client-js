import { isly } from "isly"
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
	export const type = isly.object<StatementRowIds>({
		rowId: isly.string(),
		providerCode: ProviderCode.type,
		providerCardId: isly.string().optional(),
		orderId: isly.string().optional(),
		providerTransferId: isly.string().optional(),
		merchantDetails: MerchantDetails.type.optional(),
	})
	export const is = type.is
}
