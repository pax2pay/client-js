import { isly } from "isly"
import { Format } from "./Format"
import { Type } from "./Type"

export interface Response {
	id: string
	title: string
	body: string
	format: Format
	// tag?: NotificationTagType // TODO: add later
	type: Type
	unread: boolean
}

export namespace Response {
	export const type = isly.object<Response>({
		id: isly.string(),
		title: isly.string(),
		body: isly.string(),
		format: Format.type,
		// tag: isly.optional(NotificationTagType.type),
		type: Type.type,
		unread: isly.boolean(),
	})
	export const is = type.is
}
