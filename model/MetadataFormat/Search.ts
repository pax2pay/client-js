import { isly } from "isly"

export interface Search {
	name?: string
	version?: number
	latestVersionOnly?: boolean
	exactFieldNamesOnly?: boolean
	fieldNames?: string[][]
	filteredForPortal?: boolean
}
export namespace Search {
	export const type = isly.object<Search>({
		name: isly.string().optional(),
		version: isly.number().optional(),
		latestVersionOnly: isly.boolean().optional(),
		exactFieldNamesOnly: isly.boolean().optional(),
		fieldNames: isly.array(isly.array(isly.string())).optional(),
		filteredForPortal: isly.boolean().optional(),
	})
	export const is = type.is
}
