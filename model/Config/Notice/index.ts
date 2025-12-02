import { isly } from "isly"
import { FundingLimit as NFundingLimit } from "./FundingLimit"
import { Target as NTarget } from "./Target"
import { Type as NType } from "./Type"

// NoticeConfiguration
export interface Notice<T extends NType = NType, C = any> {
	type: T
	configuration?: C
	targets?: NTarget[]
}

export namespace Notice {
	export const baseType = isly.object<Notice>({
		type: Type.type,
		configuration: isly.any().optional(),
		targets: isly.array(Target.type).optional(),
	})
	export const is = baseType.is

	export import Type = NType
	export import FundingLimit = NFundingLimit
	export import Target = NTarget
}

export type FundingLimitNotice = Notice<"FUNDING_LIMIT", NFundingLimit>
