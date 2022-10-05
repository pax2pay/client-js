export interface CardDeliveryEmailConfig {
	contactEmail?: string
	useContactEmailAsReplyTo?: boolean
	contactPhoneNumber?: string
}
export namespace CardDeliveryEmailConfig {
	export function is(value: CardDeliveryEmailConfig | any): value is CardDeliveryEmailConfig {
		return (
			(typeof value.contactEmail == "string" || value.contactEmail == undefined) &&
			(typeof value.useContactEmailAsReplyTo == "string" || value.useContactEmailAsReplyTo == undefined) &&
			(typeof value.contactPhoneNumber == "string" || value.contactPhoneNumber == undefined)
		)
	}
}
