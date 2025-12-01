import { isly } from "isly"

export interface FraudEmail {
	enabled: boolean
	emails?: string[]
}
export namespace FraudEmail {
	export const type = isly.object<FraudEmail>({
		enabled: isly.boolean(),
		emails: isly.string().array().optional(),
	})
	export const is = type.is
}
