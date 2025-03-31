import { isly } from "isly"

export interface FraudEmailConfig {
	enabled: boolean
	emails?: string[]
}
export namespace FraudEmailConfig {
	export const type = isly.object<FraudEmailConfig>({
		enabled: isly.boolean(),
		emails: isly.string().array().optional(),
	})
	export const is = type.is
}
