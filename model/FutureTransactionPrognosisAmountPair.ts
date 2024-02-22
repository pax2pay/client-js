import { AmountPair } from "./AmountPair"

export interface FutureTransactionPrognosisAmountPair {
	prognosis: AmountPair
}
export namespace FutureTransactionPrognosisAmountPair {
	export function is(value: FutureTransactionPrognosisAmountPair | any): value is FutureTransactionPrognosisAmountPair {
		return typeof value == "object" && AmountPair.is(value.prognosis)
	}
}
