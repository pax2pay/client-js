import { DateTime } from "isoly"
import { isly } from "isly"
import { PaymentOperationType } from "./PaymentOperationType"

export interface AbstractPaymentOperation {
	type: PaymentOperationType
	timestamp: DateTime
	description?: string
}
export namespace AbstractPaymentOperation {
	export const type = isly.object<AbstractPaymentOperation>({
		type: PaymentOperationType.type,
		timestamp: isly.fromIs("DateTime", DateTime.is),
		description: isly.string().optional(),
	})
	export const is = type.is
}
