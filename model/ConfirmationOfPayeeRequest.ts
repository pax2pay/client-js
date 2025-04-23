import { isly } from "isly"

export interface ConfirmationOfPayeeRequest {
	accountNumber: string
	sortCode: string
	payeeName: string
}
export namespace ConfirmationOfPayeeRequest {
	export const type = isly.object<ConfirmationOfPayeeRequest>({
		accountNumber: isly.string(),
		sortCode: isly.string(),
		payeeName: isly.string(),
	})
	export const is = type.is
}
