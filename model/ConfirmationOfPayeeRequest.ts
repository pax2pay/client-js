import { isly } from "isly"

export interface ConfirmationOfPayeeRequest {
	accountNumber: string
	sortCode: string
	payeeName: string
	sourceAccountId?: string
}
export namespace ConfirmationOfPayeeRequest {
	export const type = isly.object<ConfirmationOfPayeeRequest>({
		accountNumber: isly.string(),
		sortCode: isly.string(),
		payeeName: isly.string(),
		sourceAccountId: isly.string().optional(),
	})
	export const is = type.is
}
