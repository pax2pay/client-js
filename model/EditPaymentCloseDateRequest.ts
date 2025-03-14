import * as isoly from "isoly"
import { isly } from "isly"

export interface EditPaymentCloseDateRequest {
	closeDate: isoly.Date
}

export namespace EditPaymentCloseDateRequest {
	export const type = isly.object<EditPaymentCloseDateRequest>({
		closeDate: isly.fromIs("Date", isoly.Date.is),
	})
	export const is = type.is
}
