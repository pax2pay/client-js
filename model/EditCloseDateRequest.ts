import { Date } from "isoly"
import { isly } from "isly"

export interface EditCloseDateRequest {
	closeDate: Date
}
export namespace EditCloseDateRequest {
	export const type = isly.object<EditCloseDateRequest>({
		closeDate: isly.fromIs("Date", Date.is),
	})
	export const is = type.is
}
