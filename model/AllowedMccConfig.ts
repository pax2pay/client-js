import { isly } from "isly"

export interface AllowedMccConfig {
	allowedMccs: string[]
	allowedRanges: string[]
}

export namespace AllowedMccConfig {
	export const type = isly.object<AllowedMccConfig>({
		allowedMccs: isly.string().array(),
		allowedRanges: isly.string().array(),
	})
	export const is = type.is
}
