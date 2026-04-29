import { isly } from "isly"
import { CreatableType } from "./CreatableType"
import { TargetRequest } from "./TargetRequest"

export interface UpdateRequest {
	title?: string
	body?: string
	type?: CreatableType
	target?: TargetRequest[]
	createDefault?: boolean
}

export namespace UpdateRequest {
	export const type = isly.object<UpdateRequest>({
		title: isly.string().optional(),
		body: isly.string().optional(),
		type: CreatableType.type.optional(),
		target: TargetRequest.type.array().optional(),
		createDefault: isly.boolean().optional(),
	})
	export const is = type.is
}
