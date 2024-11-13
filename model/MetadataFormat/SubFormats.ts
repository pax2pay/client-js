import { isly } from "isly"

export interface SubFormats {
	top2: string[] | string[][]
	top5?: string[] | string[][]
}

export namespace SubFormats {
	export const type = isly.object<SubFormats>({
		top2: isly.union(isly.string().array(), isly.string().array().array()),
		top5: isly.union(isly.string().array(), isly.string().array().array()).optional(),
	})

	export const is = type.is
}
