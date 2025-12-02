import { isly } from "isly"
import { Target } from "./Target"
import { Type } from "./Type"

// NoticeConfiguration
export interface Notice<T extends Type = Type, C = any> {
	type: T
	configuration?: C
	targets?: Target[]
}

export namespace Notice {
	export const baseType = isly.object<Notice>({
		type: Type.type,
		configuration: isly.any().optional(),
		targets: isly.array(Target.type).optional(),
	})
	export const is = baseType.is
}
