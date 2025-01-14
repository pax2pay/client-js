import { isly } from "isly"
import { PaymentCardUsage } from "../../PaymentCardUsage"

export interface Card {
	cardType: string
	expires?: string
	usage?: PaymentCardUsage
}
export namespace Card {
	export const type = isly.object<Card>({
		cardType: isly.string(),
		expires: isly.string().optional(),
		usage: isly.fromIs("CardUsage", PaymentCardUsage.is).optional(),
	})
	export const is = type.is
}
