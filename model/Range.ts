import { isly } from "isly"

export interface Range<T> {
	start?: T
	end?: T
}

export namespace Range {
	export const type = isly.object<Range<any>>({
		start: isly.any().optional(),
		end: isly.any().optional(),
	})
	export const is = type.is
}
