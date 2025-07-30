import { isly } from "isly"
import { ConfirmationOfPayeeAccountType } from "./ConfirmationOfPayeeAccountType"

export interface ConfirmationOfPayeeRequest {
	accountNumber: string
	sortCode: string
	payeeName: string
	accountType: ConfirmationOfPayeeAccountType
	secondaryAccountId?: string
	sourceAccountId?: string
}
export namespace ConfirmationOfPayeeRequest {
	export const type = isly.object<ConfirmationOfPayeeRequest>({
		accountNumber: isly.string(),
		sortCode: isly.string(),
		payeeName: isly.string(),
		secondaryAccountId: isly.string().optional(),
		accountType: ConfirmationOfPayeeAccountType.type,
		sourceAccountId: isly.string().optional(),
	})
	export const is = type.is
}
