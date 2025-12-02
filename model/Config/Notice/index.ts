import { isly } from "isly"
import { FundingLimit as NFundingLimit } from "./FundingLimit"
import { Target as NTarget } from "./Target"
import { Type as NType } from "./Type"

// NoticeConfiguration
export type Notice = FundingLimitNotice

export namespace Notice {
	export const type = isly.union<Notice>(FundingLimitNotice.type)
	export interface Base<T extends NType = NType, C = any> {
		type: T
		configuration?: C
		targets?: NTarget[]
	}
	export namespace Base {
		export const type = isly.object<Notice.Base>({
			type: Type.type,
			configuration: isly.any().optional(),
			targets: isly.array(Target.type).optional(),
		})
		export const is = type.is
	}

	export import Type = NType
	export import FundingLimit = NFundingLimit
	export import Target = NTarget
}

export type FundingLimitNotice = Notice.Base<"FUNDING_LIMIT", NFundingLimit>
export namespace FundingLimitNotice {
	export const type = Notice.Base.type.extend<FundingLimitNotice>({
		type: isly.string("FUNDING_LIMIT"),
		configuration: NFundingLimit.type.optional(),
	})
}
