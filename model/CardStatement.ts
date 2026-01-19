import * as isoly from "isoly"
import { isly } from "isly"
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
	id?: string
}

export namespace CardStatement {
	export const type = isly.object<CardStatement>({
		timestamp: isly.fromIs("isoly.DateTime", isoly.DateTime.is),
		provider: isly.fromIs("ProviderCode", ProviderCode.is),
		reference: isly.string().optional(),
		description: isly.string(),
		type: isly.string(),
		status: isly.string().optional(),
		balance: isly.number(),
		fundsChanged: isly.number().optional(),
		currency: isly.fromIs("isoly.Currency", isoly.Currency.is).optional(),
		reason: isly.string().optional(),
		additionalInformation: isly.record(isly.string(), isly.any()).optional(),
		id: isly.string().optional(),
	})
	export const is = type.is
}
