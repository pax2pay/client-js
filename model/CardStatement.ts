import * as isoly from "isoly"
import { ProviderCode } from "./ProviderCode"

export interface CardStatement {
	timestamp: isoly.DateTime
	provider: ProviderCode
	reference?: string
	description: string
	type: string
	status?: string
	balance: number
	fundsChanged?: number
	currency?: isoly.Currency
	reason?: string
	additionalInformation?: Record<string, any>
}

export namespace CardStatement {
	export function is(value: CardStatement | any): value is CardStatement {
		return (
			typeof value == "object" &&
			isoly.DateTime.is(value.timestamp) &&
			ProviderCode.is(value.provider) &&
			(value.reference == undefined || typeof value.reference == "string") &&
			typeof value.description == "string" &&
			typeof value.type == "string" &&
			(value.status == undefined || typeof value.status == "string") &&
			typeof value.balance == "number" &&
			(value.fundsChanged == undefined || typeof value.fundsChanged == "number") &&
			(value.currency == undefined || isoly.Currency.is(value.currency)) &&
			(value.reason == undefined || typeof value.reason == "string") &&
			(value.additionalInformation == undefined || typeof value.additionalInformation == "object")
		)
	}
}
