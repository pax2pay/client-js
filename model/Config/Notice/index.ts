import { isly } from "isly"
import { Configuration } from "./FundingLimit"
import { Target as NTarget } from "./Target"
import { Type as NType } from "./Type"

export namespace Notice {
	export interface Base<T extends Type = Type, C = any> {
		type: T
		configuration?: C
		targets?: Target[]
	}
	export namespace Base {
		export const type = isly.object<Notice.Base>({
			type: NType.type,
			configuration: isly.any().optional(),
			targets: isly.array(NTarget.type).optional(),
		})
		export const is = type.is
	}
	// FundingLimitNoticeConfiguration
	export type FundingLimit = Notice.Base<"FUNDING_LIMIT", Configuration>
	export import Target = NTarget
	export import Type = NType
	export namespace FundingLimit {
		export const type = Notice.Base.type.extend<FundingLimit>({
			type: isly.string("FUNDING_LIMIT"),
			configuration: Configuration.type.optional(),
		})
	}
	export const type = isly.union<Notice>(FundingLimit.type)
}
// NoticeConfiguration
export type Notice = Notice.FundingLimit
