import { isly } from "isly"
import { Format } from "./Format"
import { Type } from "./Type"

export interface InsertRequest {
	title: string
	body: string
	format: Format
	// tag?: Tag; // TODO: add later
	type: Type
	createDefault: boolean
}

export namespace InsertRequest {
	export const type = isly.object<InsertRequest>({
		title: isly.string(),
		body: isly.string(),
		format: Format.type,
		// tag: isly.optional(Tag.type),
		type: Type.type,
		createDefault: isly.boolean(),
	})
	export const is = type.is
}
