import { isly } from "isly"
import { ConfirmationOfPayeeResponseStatus } from "./ConfirmationOfPayeeResponseStatus"

export interface ConfirmationOfPayeeResponse {
	status: ConfirmationOfPayeeResponseStatus
	message?: string
	nameSuggestion?: string
}
export namespace ConfirmationOfPayeeResponse {
	export const type = isly.object<ConfirmationOfPayeeResponse>({
		status: ConfirmationOfPayeeResponseStatus.type,
		message: isly.string().optional(),
		nameSuggestion: isly.string().optional(),
	})
	export const is = type.is
}
