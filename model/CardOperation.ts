import { DateTime } from "isoly"
import { isly } from "isly"

export interface CardOperation {
	type: string
	timestamp: DateTime
}
export namespace CardOperation {
	export const type = isly.object<CardOperation>({
		type: isly.string(),
		timestamp: isly.fromIs("DateTime", DateTime.is),
	})
	export const is = type.is
}
