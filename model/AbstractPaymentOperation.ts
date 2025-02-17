import { DateTime } from "isoly"
import { isly } from "isly"

export interface AbstractPaymentOperation {
	type: string
	timestamp: DateTime
	description?: string
}
export namespace AbstractPaymentOperation {
	export const type = isly.object<AbstractPaymentOperation>({
		type: isly.string(),
		timestamp: isly.fromIs("DateTime", DateTime.is),
		description: isly.string().optional(),
	})
	export const is = type.is
}
