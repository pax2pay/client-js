import { isly } from "isly"
import { AbstractPaymentOperation } from "./AbstractPaymentOperation"
import { AmountPair } from "./AmountPair"

export interface GenericPaymentOperation extends AbstractPaymentOperation {
	amount?: AmountPair
	createdBy: string
}

export namespace GenericPaymentOperation {
	export const type = AbstractPaymentOperation.type.extend<GenericPaymentOperation>({
		amount: isly.fromIs("AmountPair", AmountPair.is).optional(),
		createdBy: isly.string(),
	})
	export const is = type.is
}
