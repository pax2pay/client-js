import { isly } from "isly"
import { Format } from "./Format"
import { Tag } from "./Tag"
import { TargetRequest } from "./TargetRequest"
import { Type } from "./Type"

export interface InsertRequest {
	title: string
	body: string
	format: Format
	tag?: Tag
	type: Type
	target?: TargetRequest[]
	createDefault?: boolean
}

export namespace InsertRequest {
	export const type = isly.object<InsertRequest>({
		title: isly.string(),
		body: isly.string(),
		format: Format.type,
		tag: Tag.type.optional(),
		type: Type.type,
		target: TargetRequest.type.array().optional(),
		createDefault: isly.boolean().optional(),
	})
	export const is = type.is
}
