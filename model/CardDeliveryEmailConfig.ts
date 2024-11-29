import { isly } from "isly"

export interface CardDeliveryEmailConfig {
	contactEmail?: string
	useContactEmailAsReplyTo?: boolean
	contactPhoneNumber?: string
}
export namespace CardDeliveryEmailConfig {
	export const type = isly.object<CardDeliveryEmailConfig>({
		contactEmail: isly.string().optional(),
		useContactEmailAsReplyTo: isly.boolean().optional(),
		contactPhoneNumber: isly.string().optional(),
	})
	export const is = type.is
}
