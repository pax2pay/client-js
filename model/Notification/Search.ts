import { isly } from "isly"

export interface Search {
	unreadOnly?: boolean
}

export namespace Search {
	export const type = isly.object<Search>({
		unreadOnly: isly.boolean().optional(),
	})
	export const is = type.is
}
