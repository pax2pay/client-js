import { isly } from "isly"
import { Format } from "./Format"
import { Tag } from "./Tag"
import { Type } from "./Type"

export interface Response {
	id: string
	title: string
	body: string
	format: Format
	tag?: Tag
	type: Type
	unread?: boolean
}

export namespace Response {
	export const type = isly.object<Response>({
		id: isly.string(),
		title: isly.string(),
		body: isly.string(),
		format: Format.type,
		tag: Tag.type.optional(),
		type: Type.type,
		unread: isly.boolean().optional(),
	})
	export const is = type.is
}
