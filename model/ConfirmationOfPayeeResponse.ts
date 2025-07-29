import { isly } from "isly"
import { ConfirmationOfPayeeAccountType } from "./ConfirmationOfPayeeAccountType"
import { ConfirmationOfPayeeResponseStatus } from "./ConfirmationOfPayeeResponseStatus"

export interface ConfirmationOfPayeeResponse {
	status: ConfirmationOfPayeeResponseStatus
	message?: string
	nameSuggestion?: string
	description?: string
	acceptedStatus?: ConfirmationOfPayeeResponseStatus
	acceptedByUser?: string
	accountType: ConfirmationOfPayeeAccountType
	secondaryAccountId: string
	sourceAccountId?: string
}
export namespace ConfirmationOfPayeeResponse {
	export const type = isly.object<ConfirmationOfPayeeResponse>({
		status: ConfirmationOfPayeeResponseStatus.type,
		message: isly.string().optional(),
		nameSuggestion: isly.string().optional(),
		description: isly.string().optional(),
		acceptedStatus: ConfirmationOfPayeeResponseStatus.type.optional(),
		acceptedByUser: isly.string().optional(),
		accountType: ConfirmationOfPayeeAccountType.type,
		secondaryAccountId: isly.string(),
		sourceAccountId: isly.string().optional(),
	})
	export const is = type.is
}
