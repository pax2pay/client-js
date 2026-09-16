import { isly } from "isly"
import { ConfirmationOfPayeeAccountType } from "./ConfirmationOfPayeeAccountType"
import { ProviderCode } from "./ProviderCode"

export interface ConfirmationOfPayeeRequest {
	accountNumber?: string
	sortCode?: string
	iban?: string
	payeeName: string
	accountType?: ConfirmationOfPayeeAccountType
	secondaryAccountId?: string
	sourceAccountId?: string
	providerCode?: ProviderCode
}
export namespace ConfirmationOfPayeeRequest {
	export const type = isly.object<ConfirmationOfPayeeRequest>({
		accountNumber: isly.string().optional(),
		sortCode: isly.string().optional(),
		iban: isly.string().optional(),
		payeeName: isly.string(),
		secondaryAccountId: isly.string().optional(),
		accountType: ConfirmationOfPayeeAccountType.type.optional(),
		sourceAccountId: isly.string().optional(),
		providerCode: ProviderCode.type.optional(),
	})
	export const is = type.is
}
