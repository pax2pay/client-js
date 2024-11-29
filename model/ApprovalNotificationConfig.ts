import { isly } from "isly"

export interface ApprovalNotificationConfig {
	enabled: boolean
	sendToAllValidApprovers?: boolean
	additionalEmails?: string[]
}

export namespace ApprovalNotificationConfig {
	export const type = isly.object<ApprovalNotificationConfig>({
		enabled: isly.boolean(),
		sendToAllValidApprovers: isly.boolean().optional(),
		additionalEmails: isly.string().array().optional(),
	})
}
