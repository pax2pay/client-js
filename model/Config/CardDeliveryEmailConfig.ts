export interface CardDeliveryEmailConfig {
	contactEmail?: string
	contactPhoneNumber?: string
}

export namespace CardDeliveryEmailConfig {
	export function is(value: CardDeliveryEmailConfig | any): value is CardDeliveryEmailConfig {
		return (
			typeof value == "object" &&
			(value.contactEmail == undefined || typeof value.contactEmail == "string") &&
			(value.contactPhoneNumber == undefined || typeof value.contactPhoneNumber == "string")
		)
	}
}
