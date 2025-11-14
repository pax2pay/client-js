import { isly } from "isly"

export interface Result {
	format: "TEST"
}

export namespace Result {
	export const type = isly.object<Result>({
		format: isly.string("TEST"),
	})
	export const is = type.is
}
