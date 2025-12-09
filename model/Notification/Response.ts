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
	unread: boolean
	organisations?: string[]
	users?: string[]
	rolesets?: string[]
	createdOn?: string
}

export namespace Response {
	export const type = isly.object<Response>({
		id: isly.string(),
		title: isly.string(),
		body: isly.string(),
		format: Format.type,
		tag: Tag.type.optional(),
		type: Type.type,
		unread: isly.boolean(),
		organisations: isly.string().array().optional(),
		users: isly.string().array().optional(),
		rolesets: isly.string().array().optional(),
		createdOn: isly.string().optional(),
	})
	export const is = type.is
}
