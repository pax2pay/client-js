import { isly } from "isly"

export interface AllowedMcc {
	allowedMccs: string[]
	allowedRanges: string[]
}

export namespace AllowedMcc {
	export const type = isly.object<AllowedMcc>({
		allowedMccs: isly.string().array(),
		allowedRanges: isly.string().array(),
	})
	export const is = type.is
}
