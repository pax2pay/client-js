import { isly } from "isly"

export interface Search {
	name?: string
	version?: number
	latestVersionOnly?: boolean
	exactFieldNamesOnly?: boolean
	fieldNames?: string[][]
}
export namespace Search {
	export const type = isly.object<Search>({
		name: isly.string().optional(),
		version: isly.number().optional(),
		latestVersionOnly: isly.boolean().optional(),
		exactFieldNamesOnly: isly.boolean().optional(),
		fieldNames: isly.array(isly.array(isly.string())).optional(),
	})
	export const is = type.is
}
