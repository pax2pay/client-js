import { DateTime } from "isoly"
import { isly } from "isly"

export interface AbstractPaymentOperation {
	type: string
	timestamp: DateTime
}
export namespace AbstractPaymentOperation {
	export const type = isly.object<AbstractPaymentOperation>({
		type: isly.string(),
		timestamp: isly.fromIs("DateTime", DateTime.is),
	})
	export const is = type.is
}
