import { isly } from "isly"

export interface Result {
	format: "csv"
	linkUrl: string
}

export namespace Result {
	export const type = isly.object<Result>({
		format: isly.string("csv"),
		linkUrl: isly.string(),
	})
	export const is = type.is
}
