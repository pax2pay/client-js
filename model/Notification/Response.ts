import { DateTime } from "isoly"
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
	createdOn?: DateTime
	organisations?: string[]
	users?: string[]
	rolesets?: string[]
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
		createdOn: isly.fromIs("DateTime", DateTime.is).optional(),
		organisations: isly.string().array().optional(),
		users: isly.string().array().optional(),
		rolesets: isly.string().array().optional(),
	})
	export const is = type.is
}
