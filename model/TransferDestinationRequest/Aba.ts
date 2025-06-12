import { isly } from "isly"
import { BaseWithBankDetails } from "./BaseWithBankDetails"

export interface Aba extends BaseWithBankDetails {
	accountNumber: string
	bic?: string
	abaRoutingNumber: string
}

export namespace Aba {
	export const type = BaseWithBankDetails.type.extend<Aba>({
		accountNumber: isly.string(),
		bic: isly.string().optional(),
		abaRoutingNumber: isly.string(),
	})
	export const is = type.is
}
