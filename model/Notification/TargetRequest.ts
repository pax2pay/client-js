import { isly } from "isly"

export interface TargetRequest {
	organisations?: string[]
	users?: string[]
	rolesets?: string[]
}

export namespace TargetRequest {
	export const type = isly.object<TargetRequest>({
		organisations: isly.string().array().optional(),
		users: isly.string().array().optional(),
		rolesets: isly.string().array().optional(),
	})
	export const is = type.is
}
