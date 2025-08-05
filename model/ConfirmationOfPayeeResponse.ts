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
	accountType?: ConfirmationOfPayeeAccountType
	secondaryAccountId?: string
	sourceAccountId?: string
	acceptId?: string
}
export namespace ConfirmationOfPayeeResponse {
	export const type = isly.object<ConfirmationOfPayeeResponse>({
		status: ConfirmationOfPayeeResponseStatus.type,
		message: isly.string().optional(),
		nameSuggestion: isly.string().optional(),
		description: isly.string().optional(),
		acceptedStatus: ConfirmationOfPayeeResponseStatus.type.optional(),
		acceptedByUser: isly.string().optional(),
		accountType: ConfirmationOfPayeeAccountType.type.optional(),
		secondaryAccountId: isly.string().optional(),
		sourceAccountId: isly.string().optional(),
		acceptId: isly.string().optional(),
	})
	export const is = type.is
}
