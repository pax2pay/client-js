import { isly } from "isly"

// ApprovalNotificationConfig
export interface ApprovalNotification {
	enabled: boolean
	sendToAllValidApprovers?: boolean
	additionalEmails?: string[]
}

export namespace ApprovalNotification {
	export const type = isly.object<ApprovalNotification>({
		enabled: isly.boolean(),
		sendToAllValidApprovers: isly.boolean().optional(),
		additionalEmails: isly.string().array().optional(),
	})
}
