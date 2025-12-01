import { isly } from "isly"

// CardDeliveryEmailConfig
export interface CardDeliveryEmail {
	contactEmail?: string
	useContactEmailAsReplyTo?: boolean
	contactPhoneNumber?: string
}
export namespace CardDeliveryEmail {
	export const type = isly.object<CardDeliveryEmail>({
		contactEmail: isly.string().optional(),
		useContactEmailAsReplyTo: isly.boolean().optional(),
		contactPhoneNumber: isly.string().optional(),
	})
	export const is = type.is
}
