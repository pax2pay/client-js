import { isly } from "isly"

export interface Summary {
	successful: number
	failed: number
	remaining: number
	total: number
}

export namespace Summary {
	export const type = isly.object<Summary>({
		successful: isly.number(),
		failed: isly.number(),
		remaining: isly.number(),
		total: isly.number(),
	})
	export const is = type.is
}
