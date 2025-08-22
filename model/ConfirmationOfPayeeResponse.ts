import { isly } from "isly"
import { ConfirmationOfPayeeAccountType } from "./ConfirmationOfPayeeAccountType"
import { ConfirmationOfPayeeResponseStatus } from "./ConfirmationOfPayeeResponseStatus"

export interface ConfirmationOfPayeeResponse {
	status: ConfirmationOfPayeeResponseStatus
	nameSuggestion?: string
	description?: string
	accepted?: boolean
	acceptedByUser?: string
	accountType?: ConfirmationOfPayeeAccountType
	secondaryAccountId?: string
	acceptId?: string
}
export namespace ConfirmationOfPayeeResponse {
	export const type = isly.object<ConfirmationOfPayeeResponse>({
		status: ConfirmationOfPayeeResponseStatus.type,
		nameSuggestion: isly.string().optional(),
		description: isly.string().optional(),
		accepted: isly.boolean().optional(),
		acceptedByUser: isly.string().optional(),
		accountType: ConfirmationOfPayeeAccountType.type.optional(),
		secondaryAccountId: isly.string().optional(),
		acceptId: isly.string().optional(),
	})
	export const is = type.is
}
